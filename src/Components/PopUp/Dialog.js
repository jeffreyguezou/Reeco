import PopUp from "./PopUp";

const Dialog = (props) => {
  return (
    <PopUp>
      <div>
        <div className="dialogHeader">Missing Product</div>
        <div>Is this urgent?</div>
        <div className="btnSection">
          <button onClick={props.setUrgentHandler}>Yes</button>
          <button onClick={props.setWaitingHandler}>No</button>
        </div>
      </div>
    </PopUp>
  );
};
export default Dialog;
