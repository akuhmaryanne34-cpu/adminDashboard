import styles from "./Sidebar.module.css";
import Advert from "./Advert";
import {
  Home,
  ShoppingCart,
  Heart,
  Message,
  Clock,
  Receipt,
  Setting2,
} from "iconsax-react";

const Sidebar = ({
  activeView,
  setActiveView,
  showSidebar,
  setShowSidebar,
}) => {
  const menuItems = [
    { name: "Dashboard", label: "Dashboard", icon: Home },
    { name: "Order", label: "Food Order", icon: ShoppingCart },
    { name: "Favorites", label: "Favourite", icon: Heart },
    { name: "Message", label: "Message", icon: Message },
    { name: "History", label: "Order History", icon: Clock },
    { name: "Bills", label: "Bills", icon: Receipt },
    { name: "Settings", label: "Settings", icon: Setting2 },
  ];

  return (
    <div className={`${styles.sidebar} ${showSidebar ? styles.open : ""}`}>
      <h1 className={styles.logo}>GoMeal.</h1>

      <div className={styles.nav}>
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeView === item.name;

          return (
            <div
              key={item.name}
              onClick={() => {
                setActiveView(item.name);
                setShowSidebar(false); // 👈 CLOSE AFTER CLICK
              }}
              className={
                isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
              }
            >
              <div className={isActive ? styles.iconActive : styles.icon}>
                <Icon size="18" variant={isActive ? "Bold" : "Linear"} />
              </div>

              <span>{item.label}</span>
            </div>
          );
        })}
      </div>

      <Advert />
    </div>
  );
};

export default Sidebar;
