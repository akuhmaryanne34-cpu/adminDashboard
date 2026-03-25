import styles from "./header.module.css";
import { SearchNormal1, Menu } from "iconsax-react";

const Header = ({ setShowSidebar }) => {
  return (
    <div className={styles.header}>
      {/* 🔥 MOBILE MENU BUTTON */}
      <div className={styles.menuBtn} onClick={() => setShowSidebar(true)}>
        <Menu size="24" />
      </div>

      <div className={styles.greeting}>
        <h2>Hello, Patricia 👋</h2>
        <p>What do you want to eat today?</p>
      </div>

      <div className={styles.searchBox}>
        <SearchNormal1 size="18" color="#333" />
        <input type="text" placeholder="Search food, restaurants..." />
      </div>
    </div>
  );
};

export default Header;
