import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Tictac from "./components/Tictac";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>tic tac toe game</h1>
      <Tictac />
    </>
  );
}

export default App;
