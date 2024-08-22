import { useState } from "react";
import "./App.css";
import LudoBoard from "./LudoBoard";
import TodoList from "./TodoList";

function App() {
  // Objects as state variable (Topic)
  // initialization by using an object to avoid a lot of state variables
  let [moves, setMoves] = useState({ blue: 0, red: 0, yellow: 0, green: 0 });

  // Array as state variable
  let [arr, setArr] = useState(["no moves"]);

  let updateBlue = () => {
    //object re-render korte age spread kore new object er copy create korte hobe and then main update passkorte hobe
    setMoves((prevMoves) => {
      return { ...prevMoves, blue: prevMoves.blue + 1 };
    });

    // re-rendering the array
    setArr((prevArr) => {
      return [...prevArr, "blue moves"];
    });
  };
  let updateYellow = () => {
    setMoves((prevMoves) => {
      return { ...prevMoves, yellow: prevMoves.yellow + 1 };
    });
  };
  return (
    <>
      <div>
        <LudoBoard></LudoBoard>
        <p>{arr}</p>
        <div className="board">
          <p>Blue Moves = {moves.blue}</p>
          <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>
            +1
          </button>
          <p>Yellow Moves = {moves.yellow}</p>
          <button
            style={{ backgroundColor: "yellow", color: "black" }}
            onClick={updateYellow}
          >
            +1
          </button>
          <p>Green Moves = {moves.green}</p>
          <button style={{ backgroundColor: "green" }}>+1</button>
          <p>Red Moves = {moves.red}</p>
          <button style={{ backgroundColor: "red" }}>+1</button>
        </div>
      </div>

      <TodoList></TodoList>
    </>
  );
}

export default App;
