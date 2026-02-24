import styles from "./category.module.css";
import CategoryCard from "./CategoryCard";

import bakery from "../../assets/icons/bakery.png";
import burger from "../../assets/icons/burger.png";
import coffeeCup from "../../assets/icons/coffee-cup.png";
import chickenLeg from "../../assets/icons/chicken-leg.png";
import pizzaSlice from "../../assets/icons/pizza-slice.png";
import seafood from "../../assets/icons/seafood.png";

const Category = () => {
  const categories = [
    { name: "Bakery", image: bakery },
    { name: "Burger", image: burger },
    { name: "Beverage", image: coffeeCup},
    { name: "Chicken-leg", image: chickenLeg },
    { name: "Pizza-slice", image: pizzaSlice},
    { name: "Seafood", image: seafood },
  ];

  return (
    <div className={styles.categorySection}>
      <h3 className={styles.title}>Category</h3>

      <div className={styles.grid}>
        {categories.map((item, index) => (
          <CategoryCard key={index} name={item.name} image={item.image} />
        ))}
      </div>
    </div>
  );
};

export default Category;
