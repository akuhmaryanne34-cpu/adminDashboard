import styles from "./popular.module.css";
import PopularCard from "./PopularCard";
import fishBurger from "../../assets/images/fishBurger.jpg";
import beefBurger from "../../assets/images/beefBurger.jpg";
import cheeseBurger from "../../assets/images/cheeseBurger.jpg";

const Popular = ({ addToCart }) => {
  const dishes = [
    { id: 1, name: "FishBurger", price: 5.59, image: fishBurger },
    { id: 2, name: "BeefBurger", price: 5.59, image: beefBurger },
    { id: 3, name: "CheeseBurger", price: 5.59, image: cheeseBurger },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h3>Popular Dishes</h3>
        <span>View all</span>
      </div>

      <div className={styles.grid}>
        {dishes.map((dish) => (
          <PopularCard key={dish.id} dish={dish} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Popular;
