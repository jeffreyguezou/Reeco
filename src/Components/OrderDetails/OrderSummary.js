import styles from "./OrderDetails.module.css";
//import useFetch from "../../Hooks/useFetch";
//import { useSelector } from "react-redux/es/hooks/useSelector";
const OrderSummary = () => {
  return (
    <div className={styles.orderSummary}>
      <div className={styles.summaryFields}>
        <span className={styles.fieldTitle}>Supplier Name</span>
        <span className={styles.fieldValue}>East Coast Fruits</span>
      </div>
      <div className={styles.summaryFields}>
        <span className={styles.fieldTitle}>Shipping Date</span>
        <span className={styles.fieldValue}>Oct 23, 2023</span>
      </div>
      <div className={styles.summaryFields}>
        <span className={styles.fieldTitle}>Total</span>
        <span className={styles.fieldValue}>$ 987654</span>
      </div>
      <div className={styles.summaryFields}>
        <span className={styles.fieldTitle}>Category</span>
        <span className={styles.fieldValue}>Food & Beverage</span>
      </div>
      <div className={styles.summaryFields}>
        <span className={styles.fieldTitle}>Department</span>
        <span className={styles.fieldValue}>111-222-333</span>
      </div>
      <div className={styles.summaryFields}>
        <span className={styles.fieldTitle}>Status</span>
        <span className={styles.fieldValue}>Awaiting Approval</span>
      </div>
    </div>
  );
};
export default OrderSummary;
