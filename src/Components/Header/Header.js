import styles from "./Header.module.css";
import { BsCart, BsChevronCompactDown } from "react-icons/bs";
const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.navItems}>
        <div>
          <span className={styles.logo}>Reeco</span>
        </div>
        <div>Store</div>
        <div>Orders</div>
        <div>Analytics</div>
      </div>
      <div className={styles.rightNav}>
        <span>
          <BsCart />
        </span>
        <span className={styles.greeting}>
          Hello, James <BsChevronCompactDown />
        </span>
      </div>
    </div>
  );
};
export default Header;
