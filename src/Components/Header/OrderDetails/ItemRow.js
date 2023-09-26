import classes from "./OrderItems.module.css";
import { AiOutlineCheck } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { changeStatus } from "../../Redux/Orders";
const ItemRow = (props) => {
  const dispatch = useDispatch();
  const status = props.status === "unset" ? "" : "Approved";
  const approveHandler = () => {
    console.log("entered");
    dispatch(changeStatus({ status: "Approved" }));
  };

  return (
    <div className={classes.tableHeader}>
      <div className={classes.tableField}>{props.name}</div>
      <div className={classes.tableField}>{props.brand}</div>
      <div className={classes.tableField}>{props.price}</div>
      <div className={classes.tableField}>{props.quantity}</div>
      <div className={classes.tableField}>{props.total}</div>
      <div className={classes.tableField}>
        <span>{status}</span>
        <div className={classes.statusOption}>
          <AiOutlineCheck
            onClick={approveHandler}
            style={{ cursor: "pointer" }}
          />
          <RxCross2 style={{ cursor: "pointer" }} />
        </div>
      </div>
    </div>
  );
};
export default ItemRow;
