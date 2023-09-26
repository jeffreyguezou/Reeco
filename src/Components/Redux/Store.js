import { configureStore } from "@reduxjs/toolkit";
import statusReducer from "./Orders";
const store = configureStore({
  reducer: {
    changeStatus: statusReducer,
  },
});
export default store;
