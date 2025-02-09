import { staticSalesData, staticProducts } from '../../data/staticData';
import ManagerSidebar from '../../components/ManagerSidebar';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

export default function Dashboard() {
  const lowStockProducts = staticProducts.filter(
    product => product.stock <= staticSalesData.lowStockAlert
  );

  return (
    <div className="flex">
      <ManagerSidebar />
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-8">Dashboard</h1>
        
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Total Sales</h3>
            <p className="text-3xl font-bold text-blue-600">
              ${staticSalesData.totalSales.toLocaleString()}
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Daily Sales</h3>
            <p className="text-3xl font-bold text-green-600">
              ${staticSalesData.dailySales.toLocaleString()}
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Total Orders</h3>
            <p className="text-3xl font-bold text-purple-600">
              {staticSalesData.totalOrders}
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Avg. Order Value</h3>
            <p className="text-3xl font-bold text-orange-600">
              ${staticSalesData.averageOrderValue.toFixed(2)}
            </p>
          </div>
        </div>

        {/* Low Stock Alerts */}
        {lowStockProducts.length > 0 && (
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
            <div className="flex items-center">
              <HiOutlineExclamationCircle className="h-6 w-6 text-yellow-400 mr-2" />
              <h2 className="text-lg font-semibold text-yellow-800">Low Stock Alert</h2>
            </div>
            <div className="mt-2">
              {lowStockProducts.map(product => (
                <div key={product.id} className="text-yellow-700">
                  {product.name}: {product.stock} units remaining
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Monthly Sales Chart */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Monthly Sales Trend</h2>
            <div className="h-64 flex items-end space-x-4">
              {staticSalesData.salesByMonth.map((data) => (
                <div key={data.month} className="flex flex-col items-center flex-1">
                  <div
                    className="w-full bg-blue-500 rounded-t"
                    style={{
                      height: `${(data.sales / staticSalesData.monthlySales) * 200}px`,
                    }}
                  ></div>
                  <p className="mt-2 text-sm font-medium">{data.month}</p>
                  <p className="text-sm text-gray-600">${data.sales.toLocaleString()}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Top Products */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Top Performing Products</h2>
            <div className="space-y-4">
              {staticSalesData.topProducts.map((product) => (
                <div key={product.id} className="flex justify-between items-center border-b pb-2">
                  <div>
                    <h3 className="font-semibold">{product.name}</h3>
                    <p className="text-sm text-gray-600">{product.sales} units sold</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">${product.revenue.toLocaleString()}</p>
                    <p className="text-sm text-gray-600">Revenue</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Inventory Overview */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Inventory Overview</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Product</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">In Stock</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Units Sold</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {staticProducts.map((product) => (
                  <tr key={product.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{product.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{product.stock}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{product.sold}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        product.stock > staticSalesData.lowStockAlert
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {product.stock > staticSalesData.lowStockAlert ? 'In Stock' : 'Low Stock'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}