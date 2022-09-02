import React from "react";
import "./Die.css";

function Die({ number }) {
  return (
    <div className="die-face">
      <h2>{number}</h2>
    </div>
  );
}

export default Die;
