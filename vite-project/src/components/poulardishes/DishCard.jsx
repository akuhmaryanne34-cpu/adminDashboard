import styles from "./DishCard.module.css";

function DishCard({ dish }) {
  return (
    <div className={styles.card}>
      {/* IMAGE (FLOATING) */}
      <div className={styles.imageWrapper}>
        <img src={dish.image} alt={dish.name} />
      </div>

      {/* CONTENT */}
      <div className={styles.content}>
        <h4>{dish.name}</h4>

        <p className={styles.price}>Starting from</p>
        <h5>${dish.price.toFixed(2)}</h5>

        <div className={styles.meta}>
          <span>⭐ {dish.rating}</span>
          <span>{dish.sales} Total Sale</span>
        </div>
      </div>
    </div>
  );
}

export default DishCard;
