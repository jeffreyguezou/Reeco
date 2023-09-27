import { createSlice } from "@reduxjs/toolkit";
export const PopUpSlice = createSlice({
  name: "popup",
  initialState: { isShowPopUp: false, isShowEditWindow: false },
  reducers: {
    showPopUp: (state, action) => {
      state.isShowPopUp = action.payload.isShowPopUp;
    },
    showEditWindow: (state, action) => {
      state.isShowEditWindow = action.payload.isShowEditWindow;
    },
  },
});
export const { showPopUp, showEditWindow } = PopUpSlice.actions;
export default PopUpSlice.reducer;
