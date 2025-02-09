import { useState } from 'react';
import ManagerSidebar from '../../components/ManagerSidebar';
import { staticProducts } from '../../data/staticData';
import toast from 'react-hot-toast';

export default function Products() {
  const [products, setProducts] = useState(staticProducts);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    description: '',
    image: '',
    stock: ''
  });

  const handleAddProduct = (e) => {
    e.preventDefault();
    const product = {
      ...newProduct,
      id: products.length + 1,
      price: parseFloat(newProduct.price),
      stock: parseInt(newProduct.stock)
    };
    
    setProducts([...products, product]);
    setNewProduct({
      name: '',
      price: '',
      description: '',
      image: '',
      stock: ''
    });
    toast.success('Product added successfully!');
  };

  const handleRemoveProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
    toast.success('Product removed successfully!');
  };

  return (
    <div className="flex">
      <ManagerSidebar />
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-8">Manage Products</h1>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
          <form onSubmit={handleAddProduct} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={newProduct.name}
                onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Price</label>
              <input
                type="number"
                required
                step="0.01"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={newProduct.price}
                onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={newProduct.description}
                onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Image URL</label>
              <input
                type="url"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={newProduct.image}
                onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Stock</label>
              <input
                type="number"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={newProduct.stock}
                onChange={(e) => setNewProduct({...newProduct, stock: e.target.value})}
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add Product
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
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
                <p className="text-sm text-gray-500">Stock: {product.stock}</p>
                <button
                  onClick={() => handleRemoveProduct(product.id)}
                  className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Remove Product
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}