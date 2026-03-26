import styles from "./Popular.module.css";

const PopularCard = ({ dish, addToCart }) => {
  return (
    <div className={styles.card}>
      <img src={dish.image} alt={dish.name} />

      <h4>{dish.name}</h4>
      <p>${dish.price}</p>

      <button onClick={() => addToCart(dish)}>+</button>
    </div>
  );
};

export default PopularCard;
