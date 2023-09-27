import classes from "./OrderItems.module.css";
import { AiOutlineCheck } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { approveStatus } from "../Redux/Orders";
import { showPopUp } from "../Redux/PopUpSlice";
import { useSelector } from "react-redux";
import Dialog from "../PopUp/Dialog";
const ItemRow = (props) => {
  const dispatch = useDispatch();
  const isShowPopUp = useSelector((state) => state.showPopUp.isShowPopUp);
  const status = props.status;
  const approveHandler = (name) => {
    dispatch(approveStatus({ name: name, status: "Approved" }));
  };
  const showPopUpHandler = (name) => {
    dispatch(showPopUp({ isShowPopUp: true }));
    window.currentName = name;
  };
  const setUrgentHandler = () => {
    dispatch(
      approveStatus({ name: window.currentName, status: "Waiting - Urgent" })
    );
    dispatch(showPopUp({ isShowPopUp: false }));
  };
  const setWaitingHandler = () => {
    dispatch(approveStatus({ name: window.currentName, status: "Waiting" }));
    dispatch(showPopUp({ isShowPopUp: false }));
  };
  return (
    <>
      <div className={classes.tableHeader}>
        <div className={classes.tableField}>{props.name}</div>
        <div className={classes.tableField}>{props.brand}</div>
        <div className={classes.tableField}>{props.price}</div>
        <div className={classes.tableField}>{props.quantity}</div>
        <div className={classes.tableField}>{props.total}</div>
        <div className={classes.tableField}>
          {status === "Approved" ? (
            <div className={classes.approvedPill}>
              <span>{status}</span>
            </div>
          ) : (
            <></>
          )}
          {status === "Waiting - Urgent" ? (
            <div className={classes.urgentPill}>
              <span>{status}</span>
            </div>
          ) : (
            <></>
          )}
          {status === "Waiting" ? (
            <div className={classes.waitingPill}>
              <span>{status}</span>
            </div>
          ) : (
            <></>
          )}
          {status === "unset" ? <div className={classes.pill}></div> : <></>}

          <div className={classes.statusOption}>
            <AiOutlineCheck
              onClick={() => approveHandler(props.name)}
              style={{ cursor: "pointer" }}
            />
            <RxCross2
              onClick={() => showPopUpHandler(props.name)}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      </div>
      {isShowPopUp && (
        <Dialog
          setUrgentHandler={setUrgentHandler}
          setWaitingHandler={setWaitingHandler}
        />
      )}
    </>
  );
};
export default ItemRow;
