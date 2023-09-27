import PopUp from "./PopUp";

const Dialog = (props) => {
  return (
    <PopUp>
      <div>
        <div className="dialogHeader">
          <span>Missing Product</span>
          <div className="closeX" onClick={props.closePopUpHandler}>
            X
          </div>
        </div>
        <div className="dialogTitle">
          <span>Is this urgent?</span>
        </div>

        <div className="btnSection">
          <button onClick={props.setUrgentHandler}>Yes</button>
          <button onClick={props.setWaitingHandler}>No</button>
        </div>
      </div>
    </PopUp>
  );
};
export default Dialog;
