import styles from "./PopularDishes.module.css";
import dishes from "../../data/dishes";
import DishCard from "./DishCard";

function PopularDishes() {
  return (
    <div className={styles.wrapper}>
      {/* HEADER */}
      <div className={styles.header}>
        <div>
          <h3>Popular Dishes</h3>
          <p>
            <span>20+</span> New dishes added this week
          </p>
        </div>

        <button className={styles.viewMore}>View More →</button>
      </div>

      {/* GRID */}
      <div className={styles.grid}>
        {dishes.slice(0, 8).map((dish) => (
          <DishCard key={dish.id} dish={dish} />
        ))}
      </div>
    </div>
  );
}

export default PopularDishes;
