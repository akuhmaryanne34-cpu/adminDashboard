import styles from "./main.module.css";
import Header from "./Header";
import Dashboard from "./Dashboard";
import Order from "./Order";
import Favourites from "./Favourites";
import Message from "./Message";
import History from "./History";
import Bills from "./Bills";
import Settings from "./Settings";

const Main = ({ activeView, addToCart }) => {
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
      <Header />

      <div className={styles.content}>
        {renderView[activeView] || <Dashboard addToCart={addToCart} />}
      </div>
    </div>
  );
};

export default Main;
