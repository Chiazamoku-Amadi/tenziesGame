import React, { useState, useEffect } from "react";
import "./Main.css";
import Die from "../Die/Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

function Main() {
  const [dice, setDice] = useState(newRoll());
  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const allSame = dice.every((die) => die.value === dice[0].value);

    setTenzies(allHeld && allSame ? true : false);
  }, [dice]);

  function generateNewDie() {
    return {
      id: nanoid(),
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
    };
  }

  function newRoll() {
    const newDice = [];

    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie());
    }
    return newDice;
  }

  function rollDice() {
    tenzies
      ? setDice(newRoll())
      : setDice((prevDice) =>
          prevDice.map((die) => {
            return die.isHeld ? die : generateNewDie();
          })
        );
  }

  function hold(dieId) {
    setDice((prevDice) =>
      prevDice.map((die) => {
        return die.id === dieId ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  const dieElements = dice.map((die) => (
    <Die
      key={die.id}
      number={die.value}
      isHeld={die.isHeld}
      holdDie={() => hold(die.id)}
    />
  ));

  return (
    <section className="container">
      {tenzies && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={500}
        />
      )}
      <div className="frame">
        <div className="game-card">
          <div className="card-content">
            <h2>Tenzies</h2>
            <p>
              Roll until all dice are the same. Click each die to freeze it at
              its current value between rolls.
            </p>
            <div className="allDice">{dieElements}</div>
            <button onClick={rollDice}>{tenzies ? "New Game" : "Roll"}</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
