import styles from "./orderMenu.module.css";
import pizza from "../../assets/icons/pizza-slice.png";
import burger from "../../assets/icons/burger.png";


const OrderMenu = ({ cart = [], removeFromCart }) => {
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className={styles.wrapper}>
      <h3>Order Menu</h3>

      {cart.length === 0 ? (
        <p>No items yet</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className={styles.item}>
            <div>
              <p>{item.name}</p>
              <span>${item.price}</span>
            </div>

            {/* 🔥 Remove Button */}
            <button
              onClick={() => removeFromCart(index)}
              className={styles.removeBtn}
            >
              ✕
            </button>
          </div>
        ))
      )}

      <div className={styles.total}>
        <strong>Total</strong>
        <strong>${total.toFixed(2)}</strong>
      </div>
    </div>
  );
};

export default OrderMenu;
