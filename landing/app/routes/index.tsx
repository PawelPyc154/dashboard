import { useEffect, useState } from "react";
import { Link } from "remix";

export default function Index() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Remix landing app</h1>
      <a href="https://pawelpyc.pl/app">Dashboard</a>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={() => localStorage.setItem("test", inputValue)}>
        test local storage
      </button>
    </div>
  );
}
