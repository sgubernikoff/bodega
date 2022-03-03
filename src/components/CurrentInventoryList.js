import React from "react";
import InventoryItemCard from "./InventoryItemCard";

function CurrentInventoryList({ snacks, addSnacks, clickDelete }) {
  const display = snacks.map((item) => (
    <InventoryItemCard
      key={item.id}
      item={item}
      clickSnack={addSnacks}
      clickDelete={clickDelete}
    />
  ));
  return (
    <div id="current-inventory">
      <h2>Current Inventory</h2>
      <div>{display}</div>
    </div>
  );
}

export default CurrentInventoryList;
