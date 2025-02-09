import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { HiOutlineShoppingCart, HiOutlineUser, HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';

export default function Layout({ children }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 min-h-screen">
        <nav className="bg-white dark:bg-gray-800 shadow-lg">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between h-16">
              <div className="flex">
                <Link to="/" className="flex items-center">
                  <span className="text-xl font-bold text-gray-800 dark:text-white">RetailPro</span>
                </Link>
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {darkMode ? <HiOutlineSun className="h-6 w-6 text-white" /> : <HiOutlineMoon className="h-6 w-6" />}
                </button>

                {user ? (
                  <>
                    {user.role === 'citizen' && (
                      <Link to="/cart" className="p-2">
                        <HiOutlineShoppingCart className="h-6 w-6" />
                      </Link>
                    )}
                    <div className="flex items-center space-x-2">
                      <HiOutlineUser className="h-6 w-6" />
                      <span>{user.name}</span>
                    </div>
                    <button
                      onClick={() => {
                        logout();
                        navigate('/login');
                      }}
                      className="bg-red-500 text-white px-4 py-2 rounded"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <Link
                    to="/login"
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto px-4 py-6">
          {children}
        </main>
      </div>
    </div>
  );
}