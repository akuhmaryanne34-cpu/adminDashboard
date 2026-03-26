import styles from "./Sidebar.module.css";

const Advert = () => {
  return (
    <div className={styles.advert}>
      <h3>Upgrade to Pro</h3>
      <p>Unlock premium tools and grow faster.</p>
      <button>Upgrade Now</button>
    </div>
  );
};

export default Advert;
