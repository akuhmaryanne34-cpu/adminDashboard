import styles from "./balanceCard.module.css";

const BalanceCard = () => {
  return (
    <div className={styles.wrapper}>
      <h3>Your Balance</h3>

      <div className={styles.card}>
        <div>
          <p>Balance</p>
          <h2>$12.00</h2>
        </div>

        <div className={styles.actions}>
          <button>Top up</button>
          <button>Transfer</button>
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;
