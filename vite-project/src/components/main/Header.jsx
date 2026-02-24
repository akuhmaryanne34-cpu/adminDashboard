import styles from "./header.module.css";
import { SearchNormal1 } from "iconsax-react";

const Header = () => {
  return (
    <div className={styles.header}>
      {/* LEFT: Greeting */}
      <div className={styles.greeting}>
        <h2>Hello, Patricia 👋</h2>
        <p>What do you want to eat today?</p>
      </div>

      {/* RIGHT: Search */}
      <div className={styles.searchBox}>
        <SearchNormal1 size="18" color="#333"/>
        <input type="text" placeholder="Search food, restaurants..." />
      </div>
    </div>
  );
};

export default Header;
