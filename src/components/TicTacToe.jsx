import React, { useState } from "react";
import useTicTacToe from "../hooks/useTicTacToe";

const initialBoard = () => Array(9).fill(null);
const TicTacToe = () => {
  const { board, handleClick, calculateWinner, getStatusMessage, resetGame } =
    useTicTacToe();

  return (
    <div className="game">
      <div className="status">
        {getStatusMessage()}
        <button onClick={resetGame}>Reset game</button>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          marginTop: "10px",
        }}
        className="board"
      >
        {board.map((b, index) => {
          return (
            <button
              className="cell"
              key={index}
              onClick={() => handleClick(index)}
              disabled={b !== null}
              style={{
                height: "100px",
                width: "100px",
                color: "black",
                border: "1px solid gray",
              }}
            >
              {b}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TicTacToe;
