import { createSlice } from "@reduxjs/toolkit";
let initialOrders;
const response = await fetch(
  "https://reeco-6db5b-default-rtdb.firebaseio.com/Orders.json"
);

const fetchedOrders = await response.json();
console.log(fetchedOrders);
initialOrders = fetchedOrders.Order1;
console.log(initialOrders);

export const orderSlice = createSlice({
  name: "orders",
  initialState: initialOrders,
  reducers: {
    changeStatus(state, action) {
      console.log(state, action.payload);
    },
  },
});
export const { changeStatus } = orderSlice.actions;
export default orderSlice.reducer;
