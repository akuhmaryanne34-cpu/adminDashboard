import styles from "./AddressCard.module.css";
import { Location } from "iconsax-react";

const AddressCard = () => {
  return (
    <div className={styles.wrapper}>
      <h3>Your Address</h3>

      <div className={styles.row}>
        <Location size="18" color="#ff7a00" />
        <span>Elm Street, 23</span>
        <button>Change</button>
      </div>

      <p className={styles.note}>
        You can edit address at checkout, or tap here to edit your default
        address.
      </p>
    </div>
  );
};

export default AddressCard;
