import { useState } from "react";
import styles from "./home.module.css";

import Sidebar from "../../components/sidebar/Sidebar";
import Main from "../../components/main/Main";
import Rightbar from "../../components/rightbar/Rightbar";

const Home = () => {
  // Active page (Dashboard, Favorites, etc.)
  const [activeView, setActiveView] = useState("Dashboard");

  // Cart state (GLOBAL for this page)
  const [cart, setCart] = useState([]);

  // Add to cart function
  const addToCart = (dish) => {
    setCart((prevCart) => [...prevCart, dish]);
  };

  const removeFromCart = (indexToRemove) => {
    setCart((prev) => prev.filter((_, index) => index !== indexToRemove));
  };
  return (
    <div className={styles.wrapper}>
      <Sidebar activeView={activeView} setActiveView={setActiveView} />

      <Main activeView={activeView} addToCart={addToCart} />

      <Rightbar cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
};

export default Home;
