import styles from "./Main.module.css";
import Header from "./Header";
import Dashboard from "./Dashboard";
import Order from "./Order";
import Favourites from "./Favourites";
import Message from "./Message";
import History from "./History";
import Bills from "./Bills";
import Settings from "./Settings";

const Main = ({ activeView, addToCart, setShowSidebar }) => {
  const renderView = {
    Dashboard: <Dashboard addToCart={addToCart} />,
    Order: <Order />,
    Favorites: <Favourites />,
    Message: <Message />,
    History: <History />,
    Bills: <Bills />,
    Settings: <Settings />,
  };

  return (
    <div className={styles.mainContainer}>
      {/* 🔥 PASS IT HERE */}
      <Header setShowSidebar={setShowSidebar} />

      <div className={styles.content}>
        {renderView[activeView] || <Dashboard addToCart={addToCart} />}
      </div>
    </div>
  );
};

export default Main;
