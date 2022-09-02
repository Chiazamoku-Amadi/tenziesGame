import React, { useState } from "react";
import "./Main.css";
import Die from "../Die/Die";
import { nanoid } from "nanoid";

function Main() {
  const [dice, setDice] = useState(newRoll());

  function generateNewDie() {
    return {
      id: nanoid(),
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
    };
  }

  function newRoll() {
    // setDice(
    //   dice.map((die) => {
    //     return generateNewDie();
    //   })
    // );
    const newDice = [];

    for (let i = 0; i < 10; i++) {
      // const element = array[index];
      newDice.push(generateNewDie());
    }
    return newDice;
  }

  const dieElements = dice.map((die) => <Die number={die.value} />);

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
            <div className="allDice">{dieElements}</div>
            <button>Roll</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
