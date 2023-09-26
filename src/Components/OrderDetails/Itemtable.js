import classes from "./OrderItems.module.css";
import { useSelector } from "react-redux";
import ItemRow from "./ItemRow";

const ItemTable = () => {
  const items = useSelector((state) => state.changeStatus);
  const itemsArray = [];
  for (let key in items) {
    itemsArray.push(items[key]);
  }
  return (
    <div className={classes.table}>
      <div className={classes.tableHeader}>
        <div className={classes.headerFields}>Product Name</div>
        <div className={classes.headerFields}>Brand</div>
        <div className={classes.headerFields}>Price</div>
        <div className={classes.headerFields}>Quantity</div>
        <div className={classes.headerFields}>Total</div>
        <div className={classes.headerFields}>Status</div>
      </div>
      {itemsArray.map((item) => {
        return (
          <ItemRow
            key={item.Name}
            name={item.Name}
            brand={item.Brand}
            price={item.Price}
            quantity={item.Quantity}
            total={item.Total}
            status={item.Status}
          />
        );
      })}
    </div>
  );
};
export default ItemTable;
