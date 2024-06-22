export default function Stats({ items }) {
  if (items.length === 0) {
    return (
      <footer className="stats">
        <em>🌴 Start adding items to your list!</em>
      </footer>
    );
  }

  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / totalItems) * 100) || 0;

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? `You are all packed and ready to go! Have a Safe ✈️`
          : `👜 You have ${totalItems} items on your list, and you already packed
          ${packedItems} (${percentage}%)`}
      </em>
    </footer>
  );
}
