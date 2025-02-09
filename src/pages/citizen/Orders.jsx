import { staticOrders, staticProducts } from '../../data/staticData';

export default function Orders() {
  const getProductName = (productId) => {
    return staticProducts.find(p => p.id === productId)?.name || 'Unknown Product';
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Your Orders</h1>

      <div className="space-y-6">
        {staticOrders.map((order) => (
          <div key={order.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-lg font-semibold">Order #{order.id}</h3>
                <p className="text-gray-600">{order.date}</p>
              </div>
              <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
              }`}>
                {order.status}
              </span>
            </div>

            <div className="border-t border-b border-gray-200 py-4 mb-4">
              {order.items.map((item, index) => (
                <div key={index} className="flex justify-between items-center mb-2">
                  <span>{getProductName(item.productId)} x {item.quantity}</span>
                </div>
              ))}
            </div>

            <div className="text-right">
              <p className="text-lg font-bold">Total: ${order.total.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}