import styles from "./CategoryFilter.module.css";

import burger from "../../assets/icons/burger.png";
import pizza from "../../assets/icons/pizza-slice.png";
import coffee from "../../assets/icons/coffee-cup.png";
import chicken from "../../assets/icons/chicken-leg.png";
import seafood from "../../assets/icons/seafood.png";
import bakery from "../../assets/icons/bakery.png";

const categories = [
  { id: 1, name: "Burger", image: burger, isNew: true },
  { id: 2, name: "Pizza", image: pizza, isNew: true },
  { id: 3, name: "Coffee", image: coffee, isNew: false },
  { id: 4, name: "Chicken", image: chicken, isNew: true },
  { id: 5, name: "Seafood", image: seafood, isNew: false },
  { id: 6, name: "Bakery", image: bakery, isNew: true },
];

function CategoryFilter() {
  const newCount = categories.filter((cat) => cat.isNew).length;

  return (
    <div className={styles.wrapper}>
      {/* HEADER */}
      <div className={styles.header}>
        <div>
          <h3>Categories</h3>
          <p>{newCount}+ New categories added this week</p>
        </div>

        <button className={styles.viewMore}>View More →</button>
      </div>

      {/* LIST */}
      <div className={styles.list}>
        {categories.map((cat) => (
          <div key={cat.id} className={styles.card}>
            <div className={styles.iconWrapper}>
              <img src={cat.image} alt={cat.name} />
              {cat.isNew && <span className={styles.badge}>NEW</span>}
            </div>
            <p className={styles.name}>{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryFilter;
