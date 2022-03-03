import React from "react";
import InventoryItemCard from "./InventoryItemCard";

function ReorderInventoryList({ orderSnacks, removeSnacks, clickDelete }) {
  const display = orderSnacks.map((item) => (
    <InventoryItemCard
      key={item.id}
      item={item}
      clickSnack={removeSnacks}
      clickDelete={clickDelete}
    />
  ));

  return (
    <div id="reorder-container">
      <h2>Reorder</h2>
      {display}
    </div>
  );
}

export default ReorderInventoryList;
