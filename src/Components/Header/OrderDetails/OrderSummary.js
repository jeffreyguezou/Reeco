import styles from "./OrderDetails.module.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
const OrderSummary = () => {
  const data = useSelector((state) => state.changeStatus);
  console.log(data);
  return (
    <div className={styles.orderSummary}>
      <div className={styles.summaryFields}>
        <span className={styles.fieldTitle}>Supplier Name</span>
        <span className={styles.fieldValue}>{data.Supplier}</span>
      </div>
      <div className={styles.summaryFields}>
        <span className={styles.fieldTitle}>Shipping Date</span>
        <span className={styles.fieldValue}>{data.ShipmentDate}</span>
      </div>
      <div className={styles.summaryFields}>
        <span className={styles.fieldTitle}>Total</span>
        <span className={styles.fieldValue}>$ {data.Total}</span>
      </div>
      <div className={styles.summaryFields}>
        <span className={styles.fieldTitle}>Category</span>
        <span className={styles.fieldValue}>{data.Category}</span>
      </div>
      <div className={styles.summaryFields}>
        <span className={styles.fieldTitle}>Department</span>
        <span className={styles.fieldValue}>{data.Department}</span>
      </div>
      <div className={styles.summaryFields}>
        <span className={styles.fieldTitle}>Status</span>
        <span className={styles.fieldValue}>{data.Status}</span>
      </div>
    </div>
  );
};
export default OrderSummary;
