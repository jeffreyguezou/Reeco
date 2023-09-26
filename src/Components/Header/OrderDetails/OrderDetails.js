import OrderHeader from "./OrderHeader";
import OrderSummary from "./OrderSummary";
import OrderItems from "./OrderItems";
import classes from "./OrderDetails.module.css";
const OrderDetails = () => {
  return (
    <div className={classes.orderDetails}>
      <OrderHeader />
      <OrderSummary />
      <OrderItems />
    </div>
  );
};
export default OrderDetails;
