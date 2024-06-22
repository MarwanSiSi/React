import { useState } from "react";

export default function Form({ handleAddItems }) {
  const [desc, setDesc] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(event) {
    event.preventDefault();

    const newItem =
      desc !== "" ? { desc, quantity, package: false, id: Date.now() } : null;

    if (newItem) handleAddItems(newItem);

    setDesc("");
    setQuantity(1);
  }

  const options = Array.from({ length: 20 }, (_, index) => index + 1);

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 🥰trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {options.map((num) => (
          <option key={num}>{num}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Enter an item"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
