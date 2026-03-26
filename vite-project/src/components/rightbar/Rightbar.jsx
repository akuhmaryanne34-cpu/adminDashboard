import styles from "./Rightbar.module.css";
import RightbarHeader from "./RightbarHeader";
import BalanceCard from "./BalanceCard";
import AddressCard from "./AddressCard";
import OrderMenu from "./OrderMenu";

const Rightbar = ({ cart, removeFromCart }) => {
  return (
    <div className={styles.rightbar}>
      <RightbarHeader />
      <BalanceCard />
      <AddressCard />
      <OrderMenu cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
};

export default Rightbar;
