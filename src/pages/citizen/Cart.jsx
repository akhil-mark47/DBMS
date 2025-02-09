import { useCart } from '../../context/CartContext';
import { staticProducts } from '../../data/staticData';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const { cart, removeFromCart, clearCart, getCartTotal } = useCart();
  const navigate = useNavigate();

  const getProduct = (productId) => {
    return staticProducts.find(p => p.id === productId);
  };

  const handleCheckout = () => {
    clearCart();
    toast.success('Order placed successfully!');
    navigate('/orders');
  };

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Your Cart</h1>

      <div className="bg-white rounded-lg shadow-md p-6">
        {cart.map((item) => {
          const product = getProduct(item.productId);
          return (
            <div key={item.productId} className="flex items-center justify-between border-b py-4">
              <div className="flex items-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                </div>
              </div>
              <div className="flex items-center">
                <p className="text-lg font-bold mr-4">
                  ${(product.price * item.quantity).toFixed(2)}
                </p>
                <button
                  onClick={() => removeFromCart(item.productId)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}

        <div className="mt-8 flex justify-between items-center">
          <div className="text-lg font-bold">
            Total: ${getCartTotal().toFixed(2)}
          </div>
          <button
            onClick={handleCheckout}
            className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}