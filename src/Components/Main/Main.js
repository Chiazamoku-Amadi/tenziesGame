import React from "react";
import "./Main.css";
import Die from "../Die/Die";

function Main() {
  return (
    <section className="container">
      <div className="frame">
        <div className="game-card">
          <div className="card-content">
            <h2>Tenzies</h2>
            <p>
              Roll until all dice are the same. Click each die to freeze it at
              its current value between rolls.
            </p>
            <div className="allDice">
              <Die />
              <Die />
              <Die />
              <Die />
              <Die />
              <Die />
              <Die />
              <Die />
              <Die />
              <Die />
            </div>
            <button>Roll</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
