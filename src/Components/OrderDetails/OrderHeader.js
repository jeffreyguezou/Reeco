import styles from "./OrderDetails.module.css";
import { BiChevronRight } from "react-icons/bi";
const OrderHeader = () => {
  return (
    <div className={styles.orderHeader}>
      <div className={styles.orderBreadcrumb}>
        <span>Orders</span>
        <BiChevronRight />
        <span className={styles.selectedOrder}>Order-123456</span>
      </div>
      <div className={styles.order}>
        <span className={styles.currentOrder}>Order-123456</span>
        <div className={styles.orderBtnSection}>
          <button className={styles.backBtn}>Back</button>
          <button className={styles.approveBtn}>Approve order</button>
        </div>
      </div>
    </div>
  );
};
export default OrderHeader;
