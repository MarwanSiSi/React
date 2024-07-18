import { useRef, useEffect } from "react";
import { useKey } from "./useKey";

export const SearchBar = ({ query, setQuery }) => {
  // 1.CREATE A REF OBJECT
  const inputEl = useRef(null);

  function handleKeyPress(e) {
    //checking if the input element is focused / active using activeElement property
    if (document.activeElement === inputEl.current) return;

    if (e.code === "Enter") {
      // 3. SELECTING THE INPUT ELEMENT USING ".current" PROPERTY AND FOCUSING ON IT
      inputEl.current.focus();
      setQuery("");
    }
  }

  useKey("Enter", handleKeyPress);

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onInput={(e) => setQuery(e.target.value)}
      // 2.SET THE REF ATTRIBUTE TO THE REF OBJECT
      ref={inputEl}
    />
  );
};
