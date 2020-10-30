import React from "react";
import Counter from "./Counter";
import "./CountdownApp.css";

const CountdownApp = () => {
  return (
    <div className="countdown-container">
      <header className="countdown-header">
        <h1>New Year Countdown</h1>
      </header>
      <Counter />
    </div>
  );
};

export default CountdownApp;
