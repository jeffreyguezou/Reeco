import { createSlice } from "@reduxjs/toolkit";
export const PopUpSlice = createSlice({
  name: "popup",
  initialState: { isShowPopUp: false },
  reducers: {
    showPopUp: (state, action) => {
      state.isShowPopUp = action.payload.isShowPopUp;
    },
  },
});
export const { showPopUp } = PopUpSlice.actions;
export default PopUpSlice.reducer;
