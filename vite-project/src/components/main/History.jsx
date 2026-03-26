import styles from "./History.module.css";

const orders = [
  {
    id: "#6548",
    customer: "John Doe",
    method: "Delivery",
    time: "10:30 AM",
    amount: "$25.00",
    status: "Completed",
  },
  {
    id: "#6549",
    customer: "Mary Ann",
    method: "Pickup",
    time: "11:00 AM",
    amount: "$18.00",
    status: "Pending",
  },
  {
    id: "#6550",
    customer: "David Lee",
    method: "Delivery",
    time: "12:15 PM",
    amount: "$30.00",
    status: "Cancelled",
  },
];

const History = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Order History</h2>

        <div className={styles.actions}>
          <button>Filter</button>
          <button>Weekly</button>
        </div>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Method</th>
            <th>Time</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.method}</td>
              <td>{order.time}</td>
              <td>{order.amount}</td>
              <td>
                <span
                  className={`${styles.status} ${
                    styles[order.status.toLowerCase()]
                  }`}
                >
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default History;
