import { useState } from "react";
import styles from "./Favourites.module.css";
import dishes from "../../data/dishes"; // adjust path if needed

const Favourites = () => {
  // use all dishes as default favourites
  const [items, setItems] = useState(dishes);

  // remove item
  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>My Favorites ❤️</h2>

      {/* EMPTY STATE */}
      {items.length === 0 ? (
        <div className={styles.empty}>
          <p>No favorites yet 😢</p>
        </div>
      ) : (
        <div className={styles.grid}>
          {items.map((item) => (
            <div key={item.id} className={styles.card}>
              {/* IMAGE */}
              <div className={styles.imageWrapper}>
                <img src={item.image} alt={item.name} />
              </div>

              {/* CONTENT */}
              <div className={styles.content}>
                <h3>{item.name}</h3>
                <p className={styles.price}>${item.price}</p>
              </div>

              {/* ACTIONS */}
              <div className={styles.actions}>
                <button className={styles.add}>Add to Cart</button>
                <button
                  className={styles.remove}
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favourites;
