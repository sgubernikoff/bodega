import React from "react";

function InventoryItemCard({ item, clickSnack, clickDelete }) {
  function handleClick() {
    clickSnack(item);
  }

  function handleDelete(e) {
    e.stopPropagation();
    fetch(`http://localhost:8001/inventory/${item.id}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then(() => clickDelete(item));
  }

  return (
    <div className="card" onClick={handleClick}>
      <img src={item.image}></img>
      <h3>{item.name}</h3>
      <h4>{item.price}</h4>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default InventoryItemCard;
