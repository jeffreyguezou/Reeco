import PopUp from "./PopUp";
import classes from "./Edit.module.css";
import appleImg from "../../Assets/Apple Green Smith.png";
import { useState } from "react";

const Edit = (props) => {
  const propQty = props.quantity;
  const propPrice = props.price;
  const [quantity, setQuantity] = useState(propQty);
  const [price, setPrice] = useState(propPrice);
  const priceChangeHandler = (event) => {
    setPrice(event.target.value);
  };
  const quantityChangeHandler = (event) => {
    setQuantity(event.target.value);
  };
  return (
    <PopUp>
      <div className={classes.editBox}>
        <div className={classes.editHead}>
          <div className={classes.editName}>{props.name}</div>
          <div className={classes.editBrand}>{props.brand}</div>
        </div>
        <div className={classes.editContent}>
          <img
            className={classes.productImg}
            src={appleImg}
            alt="productImg"
          ></img>
          <div className={classes.editFields}>
            <div>
              <label>Price</label>
              <input
                onChange={priceChangeHandler}
                value={price}
                type="text"
              ></input>
            </div>
            <div>
              <label>Quantity</label>
              <input
                onChange={quantityChangeHandler}
                value={quantity}
                type="text"
              ></input>
            </div>
            <div>
              <label>Total</label>
              <input disabled="true" value={props.total} type="text"></input>
            </div>
          </div>
        </div>
        <div className={classes.editReasonSection}>
          <span className={classes.reasonHeader}>Select Reason (optional)</span>
          <div className={classes.allReasons}>
            <div className={classes.reasons}>Missing Product</div>
            <div className={classes.reasons}>Quantity not the same</div>
            <div className={classes.reasons}>Price not the same</div>
            <div className={classes.reasons}>Other</div>
          </div>
        </div>
        <div className={classes.editBtnSection}>
          <button onClick={props.closeEditBox} className={classes.cancelBtn}>
            Cancel
          </button>
          <button className={classes.editBtn}>Edit</button>
        </div>
      </div>
    </PopUp>
  );
};
export default Edit;
