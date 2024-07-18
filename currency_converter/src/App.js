import { useEffect, useState } from "react";

function App() {
  const [sourceCurrency, setSourceCurrency] = useState("EUR");
  const [targetCurrency, setTargetCurrency] = useState("USD");
  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      const controller = new AbortController();

      async function getConversion() {
        setIsLoading(true);
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${sourceCurrency}&to=${targetCurrency}`,
          { signal: controller.signal }
        );

        const data = await res.json();
        setResult(data.rates[targetCurrency]);
        setIsLoading(false);
      }
      if (sourceCurrency === targetCurrency) {
        setResult(amount);
        return;
      }
      getConversion();

      return function () {
        controller.abort();
      };
    },
    [amount, sourceCurrency, targetCurrency]
  );

  return (
    <div>
      <input
        type="text"
        value={amount}
        onInput={(e) => setAmount(+e.target.value)}
      />
      <select
        value={sourceCurrency}
        onChange={(e) => setSourceCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={targetCurrency}
        onChange={(e) => setTargetCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      {isLoading ? (
        "Loading.."
      ) : (
        <p>
          {result} {targetCurrency}
        </p>
      )}
    </div>
  );
}

export default App;
