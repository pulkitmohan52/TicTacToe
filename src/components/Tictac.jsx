import { useState } from "react";

const TicTac = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const winner = possibleWinningCombinations(board);

  const handleClick = (index) => {
    if (winner || board[index]) {
      return;
    }
    // Updating TicTac board
    const newBoard = board.slice();
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    // Logic for switching player/turns
    setIsXNext(!isXNext);
  };

  const renderSquare = (index) => {
    return (
      <button className="square" onClick={() => handleClick(index)}>
        {board[index]}
      </button>
    );
  };

  const getGameWinnerStatus = () => {
    if (winner) {
      return "Winner is: " + winner;
    } else if (board.every((square) => square !== null)) {
      return "Game draw";
    } else {
      return `Next player is: ${isXNext ? "X" : "O"}`;
    }
  };

  function possibleWinningCombinations(board) {
    const possibleCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    /*This was the elephant in the room.I was using a for in loop instead of 'for-of' loop, which made to iterate over indexes rather than combination values.*/

    for (let combs of possibleCombos) {
      const [a, b, c] = combs;
      // Winning condition
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
      // return null
    }

    /* This condition was also incorrect since earlier I was returning null inside the loop only. Sorry for this slight mistake, now fixed*/

    // No winner
    return null;
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <div className="status">{getGameWinnerStatus()}</div>
      <div className="board">
        <div className="row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      <button className="reset-button" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
};

export default TicTac;
