import React, { useState, useEffect } from "react";
import CurrentInventoryList from "./CurrentInventoryList";
import ReorderInventoryList from "./ReorderInventoryList";

function InventoryManager() {
  const [snacks, setSnacks] = useState([]);
  const [orderSnacks, setOrderSnacks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/inventory")
      .then((res) => res.json())
      .then((data) => setSnacks(data));
  }, []);

  function addSnacks(newItem) {
    const newArray = orderSnacks.find((item) => newItem.id === item.id);
    if (!newArray) return setOrderSnacks([...orderSnacks, newItem]);
  }

  function removeSnacks(deletedItem) {
    const newArray = orderSnacks.filter((item) => deletedItem.id !== item.id);
    setOrderSnacks(newArray);
  }

  function clickDelete(deletedItem) {
    const newArray = snacks.filter((item) => deletedItem.id !== item.id);
    removeSnacks(deletedItem);
    setSnacks(newArray);
  }
  return (
    <div className="container">
      <CurrentInventoryList
        snacks={snacks}
        addSnacks={addSnacks}
        clickDelete={clickDelete}
      />
      <ReorderInventoryList
        orderSnacks={orderSnacks}
        removeSnacks={removeSnacks}
        clickDelete={clickDelete}
      />
    </div>
  );
}

export default InventoryManager;
