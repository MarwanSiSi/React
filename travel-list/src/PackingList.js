import { useState } from "react";

export default function PackingList({
  items,
  handleDeleteItem,
  handleTogglePacked,
  handleClearList,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") {
    sortedItems = items;
  }
  if (sortBy === "description") {
    sortedItems = items.slice().sort((a, b) => a.desc.localeCompare(b.desc));
  }
  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <>
      <div className="list">
        <ul>
          {sortedItems.map((item) => (
            <li key={item.id}>
              <input
                onChange={() => handleTogglePacked(item.id)}
                value={item.packed}
                type="checkbox"
              />
              <Item
                item={item}
                key={item.id}
                handleDeleteItem={handleDeleteItem}
              />
            </li>
          ))}
        </ul>
        <div className="actions">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">sort by input order</option>
            <option value="description">sort by description</option>
            <option value="packed">sort by packed status</option>
          </select>
          <button
            onClick={() => {
              setSortBy("input");
              handleClearList();
            }}
          >
            clear list
          </button>
        </div>
      </div>
    </>
  );
}

function Item({ item, handleDeleteItem }) {
  return (
    <>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.desc}
      </span>
      <button onClick={() => handleDeleteItem(item.id)}>❌</button>
    </>
  );
}
