import { configureStore } from "@reduxjs/toolkit";
import statusReducer from "./Orders";
import showPopUpReducer from "./PopUpSlice";
const store = configureStore({
  reducer: {
    changeStatus: statusReducer,
    showPopUp: showPopUpReducer,
  },
});
export default store;
