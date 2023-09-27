import { createSlice } from "@reduxjs/toolkit";
let initialOrders;
const response = await fetch(
  "https://reeco-6db5b-default-rtdb.firebaseio.com/Orders.json"
);

const fetchedOrders = await response.json();
initialOrders = fetchedOrders.Order1;
const initialItems = initialOrders.Items;
console.log(initialItems);

export const orderSlice = createSlice({
  name: "orders",
  initialState: initialItems,
  reducers: {
    approveStatus(state, action) {
      console.log(action.payload);
      for (let item in state) {
        if (state[item].Name === action.payload.name) {
          state[item].Status = action.payload.status;
        }
      }
    },
  },
});
export const { approveStatus } = orderSlice.actions;
export default orderSlice.reducer;
