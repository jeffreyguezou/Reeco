import { useState, useEffect } from "react";

const useFetch = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const order = [];
    const orderResponse = async () => {
      const response = await fetch(
        "https://reeco-6db5b-default-rtdb.firebaseio.com/Orders.json"
      );

      const fetchedOrders = await response.json();
      console.log(fetchedOrders);

      for (const key in fetchedOrders) {
        order.push({
          orderID: fetchedOrders[key].OrderID,
          supplier: fetchedOrders[key].Supplier,
          shipmentDate: fetchedOrders[key].ShipmentDate,
          department: fetchedOrders[key].Department,
          category: fetchedOrders[key].Category,
          total: fetchedOrders[key].Total,
          status: fetchedOrders[key].Status,
        });
      }
      setOrders(order);
    };
    orderResponse();
  }, []);
  return orders;
};
export default useFetch;
