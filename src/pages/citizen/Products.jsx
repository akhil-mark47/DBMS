import { staticProducts } from '../../data/staticData';
import { useCart } from '../../context/CartContext';
import toast from 'react-hot-toast';

export default function Products() {
  const { addToCart } = useCart();

  const handleAddToCart = (productId) => {
    addToCart(productId);
    toast.success('Added to cart!');
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-8">Our Products</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {staticProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-lg font-bold mt-2">${product.price.toFixed(2)}</p>
              <button
                onClick={() => handleAddToCart(product.id)}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}