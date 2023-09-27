import ReactDOM from "react-dom";
const BackDrop = (props) => {
  return <div className="backdrop"></div>;
};
const Overlay = (props) => {
  return (
    <div className="popup">
      <div className="popUpContent">{props.children}</div>
    </div>
  );
};
const portalAt = document.getElementById("overlays");
const PopUp = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<BackDrop />, portalAt)}
      {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, portalAt)}
    </>
  );
};
export default PopUp;
