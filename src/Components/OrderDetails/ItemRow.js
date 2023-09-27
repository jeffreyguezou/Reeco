import classes from "./OrderItems.module.css";
import { AiOutlineCheck } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { approveStatus } from "../Redux/Orders";
import { showPopUp, showEditWindow } from "../Redux/PopUpSlice";
import { useSelector } from "react-redux";
import Dialog from "../PopUp/Dialog";
import Edit from "../PopUp/Edit";
import appleImg from "../../Assets/Apple Green Smith.png";
import { useState } from "react";
const ItemRow = (props) => {
  const [isPriceEdited, setIsPriceEdited] = useState(false);
  const [isQuantityEdited, setIsQuantityEdited] = useState(false);
  const dispatch = useDispatch();
  const isShowPopUp = useSelector((state) => state.showPopUp.isShowPopUp);
  const isShowEditWindow = useSelector(
    (state) => state.showEditWindow.isShowEditWindow
  );

  const status = props.status;
  const approveHandler = (name) => {
    dispatch(approveStatus({ name, status: "Approved" }));
  };
  const showPopUpHandler = (name) => {
    dispatch(showPopUp({ isShowPopUp: true }));
    window.current = name;
  };
  const closePopUpHandler = () => {
    dispatch(showPopUp({ isShowPopUp: false }));
  };
  const setUrgentHandler = () => {
    dispatch(
      approveStatus({ name: window.current, status: "Waiting - Urgent" })
    );
    dispatch(showPopUp({ isShowPopUp: false }));
  };
  const setWaitingHandler = () => {
    dispatch(approveStatus({ name: window.current, status: "Waiting" }));
    dispatch(showPopUp({ isShowPopUp: false }));
  };
  const openEditHandler = (props) => {
    window.editProps = props;
    dispatch(showEditWindow({ isShowEditWindow: true }));
  };
  const closeEditBox = () => {
    dispatch(showEditWindow({ isShowEditWindow: false }));
  };
  const editClickHandler = (isPriceEdited, isQuantityEdited) => {
    setIsPriceEdited(isPriceEdited);
    setIsQuantityEdited(isQuantityEdited);
    dispatch(showEditWindow({ isShowEditWindow: false }));
  };
  return (
    <>
      <div className={classes.tableHeader}>
        <div className={classes.tableField}>
          <img
            className={classes.productImg}
            src={appleImg}
            alt="productImg"
          ></img>
          {props.name}
        </div>
        <div className={classes.tableField}>{props.brand}</div>
        <div className={classes.tableField}>{props.price}</div>
        <div className={classes.tableField}>{props.quantity}</div>
        <div className={classes.tableField}>{props.total}</div>
        <div className={classes.tableField}>
          {status === "Approved" ? (
            <div className={classes.approvedPill}>
              <span>
                {status}
                {isPriceEdited ? "Price Changed" : ""}
                {isQuantityEdited ? "Quantity Changed" : ""}
              </span>
            </div>
          ) : (
            <></>
          )}
          {status === "Waiting - Urgent" ? (
            <div className={classes.urgentPill}>
              <span>
                {status}
                {isPriceEdited ? "Price Changed" : ""}
                {isQuantityEdited ? "Quantity Changed" : ""}
              </span>
            </div>
          ) : (
            <></>
          )}
          {status === "Waiting" ? (
            <div className={classes.waitingPill}>
              <span>
                {status}
                {isPriceEdited ? "Price Changed" : ""}
                {isQuantityEdited ? "Quantity Changed" : ""}
              </span>
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
            <div
              className={classes.editLink}
              onClick={() => openEditHandler(props)}
            >
              Edit
            </div>
          </div>
        </div>
      </div>
      {isShowPopUp && (
        <Dialog
          setUrgentHandler={setUrgentHandler}
          setWaitingHandler={setWaitingHandler}
          closePopUpHandler={closePopUpHandler}
        />
      )}
      {isShowEditWindow && (
        <Edit
          name={window.editProps.name}
          brand={window.editProps.brand}
          quantity={window.editProps.quantity}
          price={window.editProps.price}
          total={window.editProps.total}
          closeEditBox={closeEditBox}
          editClickHandler={editClickHandler}
        />
      )}
    </>
  );
};
export default ItemRow;
