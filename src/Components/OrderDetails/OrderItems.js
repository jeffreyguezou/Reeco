import ItemTable from "./Itemtable";
import classes from "./OrderItems.module.css";
import { BsPrinter } from "react-icons/bs";
const OrderItems = () => {
  return (
    <div className={classes.orderItemsContainer}>
      <div className={classes.itemsUtilities}>
        <div>
          <input placeholder="search" type="text"></input>
        </div>
        <div className={classes.rightItems}>
          <button className={classes.addBtn}>Add item</button>
          <BsPrinter style={{ color: "#437C5F" }} />
        </div>
      </div>
      <div className={classes.itemTable}>
        <ItemTable />
      </div>
    </div>
  );
};
export default OrderItems;
