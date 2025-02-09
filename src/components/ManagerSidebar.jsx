import { Link } from 'react-router-dom';
import { HiOutlineViewGrid, HiOutlineShoppingCart, HiOutlinePlus } from 'react-icons/hi';

export default function ManagerSidebar() {
  return (
    <div className="w-64 bg-gray-800 min-h-screen p-4">
      <div className="space-y-4">
        <Link
          to="/manager/dashboard"
          className="flex items-center space-x-2 text-white p-2 hover:bg-gray-700 rounded"
        >
          <HiOutlineViewGrid className="h-6 w-6" />
          <span>Dashboard</span>
        </Link>
        <Link
          to="/manager/products"
          className="flex items-center space-x-2 text-white p-2 hover:bg-gray-700 rounded"
        >
          <HiOutlinePlus className="h-6 w-6" />
          <span>Manage Products</span>
        </Link>
        <Link
          to="/manager/orders"
          className="flex items-center space-x-2 text-white p-2 hover:bg-gray-700 rounded"
        >
          <HiOutlineShoppingCart className="h-6 w-6" />
          <span>View Orders</span>
        </Link>
      </div>
    </div>
  );
}