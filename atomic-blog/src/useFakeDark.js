import { useState, useEffect } from "react";

function useFakeDark() {
  const [isFakeDark, setIsFakeDark] = useState(false);

  useEffect(
    function () {
      document.documentElement.classList.toggle("fake-dark-mode");
    },
    [isFakeDark]
  );

  return [isFakeDark, setIsFakeDark];
}

export { useFakeDark };
