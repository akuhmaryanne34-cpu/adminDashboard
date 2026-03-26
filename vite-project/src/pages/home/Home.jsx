import { useState } from "react";
import styles from "./Home.module.css";

import Sidebar from "../../components/sidebar/Sidebar";
import Main from "../../components/main/Main";
import Rightbar from "../../components/rightbar/Rightbar";

const Home = () => {
  const [activeView, setActiveView] = useState("Dashboard");

  const [cart, setCart] = useState([]);

  // 🔥 NEW: sidebar toggle
  const [showSidebar, setShowSidebar] = useState(false);

  const addToCart = (dish) => {
    setCart((prevCart) => [...prevCart, dish]);
  };

  const removeFromCart = (indexToRemove) => {
    setCart((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className={styles.wrapper}>
      {/* 🔥 SIDEBAR */}
      <Sidebar
        activeView={activeView}
        setActiveView={setActiveView}
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
      />

      {/* 🔥 OVERLAY */}
      {showSidebar && (
        <div className={styles.overlay} onClick={() => setShowSidebar(false)} />
      )}

      {/* MAIN CONTENT */}
      <div className={styles.content}>
        <Main
          activeView={activeView}
          addToCart={addToCart}
          setShowSidebar={setShowSidebar} // 👈 pass this
        />

        <Rightbar cart={cart} removeFromCart={removeFromCart} />
      </div>
    </div>
  );
};

export default Home;
