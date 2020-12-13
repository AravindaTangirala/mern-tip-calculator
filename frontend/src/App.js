import React, { useState } from "react";
import "./App.css";

function App() {
  const [amount, setAmount] = useState("");
  const [percent, setPercent] = useState("");
  const [tip, setTip] = useState("Tip goes here");
  const calculateTip = (e) => {
    e.preventDefault();
  };
  const data = {
    amount: amount,
    tip: percent,
  };

  fetch("  https://enigmatic-refuge-81812.herokuapp.com/api/v1/calculatetip", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setTip(data.toBePayed);
    });

  return (
    <div className="app">
      <h1>Tip goes here</h1>
      {/* input for amount */}
      <input
        type="text"
        value={amount}
        placeholder="amount"
        onChange={(e) => setAmount(e.target.value)}
      />
      {/* percentage field */}
      <input
        type="text"
        placeholder="percentage"
        value={percent}
        onChange={(e) => setPercent(e.target.value)}
      />
      <button onClick={calculateTip}>Send</button>
      {/* output */}
      <h1>your total with tip is ${tip}</h1>
    </div>
  );
}

export default App;
