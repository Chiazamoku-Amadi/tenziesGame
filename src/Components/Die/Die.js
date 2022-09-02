import React from "react";
import "./Die.css";

function Die({ number, isHeld, holdDie }) {
  return (
    <div onClick={holdDie} className={isHeld ? "die-face held" : "die-face"}>
      <h2>{number}</h2>
    </div>
  );
}

export default Die;
