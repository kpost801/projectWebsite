import "../src/App.css";
import React from "react";

function Score({ score, TryAgain }) {
  return (
    <div>
      <h2>Results</h2>
      <h4>Your score: {score}</h4>
      <button onClick={TryAgain}>Try Again?</button>
    </div>
  );
}

export default Score;
