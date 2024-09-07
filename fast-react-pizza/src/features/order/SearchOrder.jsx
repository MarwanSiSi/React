import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
  const [orderNumber, setOrderNumber] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!orderNumber) return;

    navigate(`/order/${orderNumber}`);
    setOrderNumber('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="transition:all ml-10 w-32 rounded-full bg-yellow-100 px-4 py-2 text-sm duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-stone-800 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
        placeholder="Search order"
        value={orderNumber}
        onChange={(e) => setOrderNumber(e.target.value)}
      ></input>
    </form>
  );
}

export default SearchOrder;
