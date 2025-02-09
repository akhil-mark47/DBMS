import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Layout from './components/Layout';
import Login from './pages/Login';
import Dashboard from './pages/manager/Dashboard';
import Products from './pages/manager/Products';
import Orders from './pages/manager/Orders';
import CitizenProducts from './pages/citizen/Products';
import CitizenCart from './pages/citizen/Cart';
import CitizenOrders from './pages/citizen/Orders';
import { useAuth } from './context/AuthContext';

function PrivateRoute({ children, allowedRole }) {
  const { user } = useAuth();
  
  if (!user) {
    return <Navigate to="/login" />;
  }

  if (allowedRole && user.role !== allowedRole) {
    return <Navigate to="/" />;
  }

  return children;
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <Layout>
            <Routes>
              <Route path="/login" element={<Login />} />
              
              {/* Manager Routes */}
              <Route
                path="/manager/dashboard"
                element={
                  <PrivateRoute allowedRole="manager">
                    <Dashboard />
                  </PrivateRoute>
                }
              />
              <Route
                path="/manager/products"
                element={
                  <PrivateRoute allowedRole="manager">
                    <Products />
                  </PrivateRoute>
                }
              />
              <Route
                path="/manager/orders"
                element={
                  <PrivateRoute allowedRole="manager">
                    <Orders />
                  </PrivateRoute>
                }
              />

              {/* Citizen Routes */}
              <Route
                path="/"
                element={
                  <PrivateRoute>
                    <CitizenProducts />
                  </PrivateRoute>
                }
              />
              <Route
                path="/cart"
                element={
                  <PrivateRoute allowedRole="citizen">
                    <CitizenCart />
                  </PrivateRoute>
                }
              />
              <Route
                path="/orders"
                element={
                  <PrivateRoute>
                    <CitizenOrders />
                  </PrivateRoute>
                }
              />
            </Routes>
          </Layout>
          <Toaster position="top-right" />
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;