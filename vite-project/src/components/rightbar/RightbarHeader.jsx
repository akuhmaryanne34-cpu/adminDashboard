import styles from "./rightbarHeader.module.css";
import { MessageText1, Notification, Setting2 } from "iconsax-react";
import profile from "../../assets/icons/burger.png";

const RightbarHeader = () => {
  return (
    <div className={styles.header}>
      <div className={styles.icons}>
        <MessageText1 size="20" />
        <Notification size="20" />
        <Setting2 size="20" />
      </div>

      <img src={profile} alt="profile" className={styles.profile} />
    </div>
  );
};

export default RightbarHeader;
