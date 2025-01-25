import React from 'react';

const pastOrders = [
  { id: '12345', date: '2023-10-01', total: '$123.45', status: 'Delivered' },
  { id: '12346', date: '2023-09-15', total: '$67.89', status: 'Pending' },
  { id: '12347', date: '2023-08-30', total: '$45.67', status: 'Cancelled' },
];

const MyOrdersPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      
      {/* Orders List Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Order ID</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Total</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {pastOrders.map((order) => (
              <tr key={order.id}>
                <td className="border px-4 py-2">{order.id}</td>
                <td className="border px-4 py-2">{order.date}</td>
                <td className="border px-4 py-2">{order.total}</td>
                <td className="border px-4 py-2">{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrdersPage;
