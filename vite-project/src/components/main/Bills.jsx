import styles from "./Bills.module.css";

const transactions = [
  {
    id: 1,
    title: "Burger Order",
    date: "Today",
    amount: "$10",
    status: "Paid",
  },
  {
    id: 2,
    title: "Pizza Order",
    date: "Yesterday",
    amount: "$25",
    status: "Pending",
  },
  {
    id: 3,
    title: "Sushi Order",
    date: "2 days ago",
    amount: "$15",
    status: "Paid",
  },
];

const Bills = () => {
  return (
    <div className={styles.container}>
      <h2>Billing </h2>

      {/* SUMMARY */}
      <div className={styles.summary}>
        <div className={styles.card}>
          <p>Total Balance</p>
          <h3>$120.00</h3>
        </div>

        <div className={styles.card}>
          <p>Total Spent</p>
          <h3>$85.00</h3>
        </div>

        <div className={styles.card}>
          <p>Pending</p>
          <h3>$35.00</h3>
        </div>
      </div>

      {/* TRANSACTIONS */}
      <div className={styles.transactions}>
        <h3>Recent Transactions</h3>

        {transactions.map((tx) => (
          <div key={tx.id} className={styles.row}>
            <div>
              <h4>{tx.title}</h4>
              <p>{tx.date}</p>
            </div>

            <div className={styles.right}>
              <span>{tx.amount}</span>
              <span
                className={`${styles.status} ${
                  styles[tx.status.toLowerCase()]
                }`}
              >
                {tx.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bills;
