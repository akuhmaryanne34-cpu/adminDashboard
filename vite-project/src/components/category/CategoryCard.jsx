import styles from "./Category.module.css";

const CategoryCard = ({ name, image }) => {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        <img src={image} alt={name} />
      </div>
      <p className={styles.label}>{name}</p>
    </div>
  );
};

export default CategoryCard;
