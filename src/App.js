import React from "react";
import { useState } from "react";
import "./App.css";
import ToDoList from "./components/ToDoList";
import MyInput from "./components/UI/input/MyInput";

function App() {
  const [toDoList, setToDoList] = useState([
    { name: "Проснуться", isDone: false },
    { name: "Умыться", isDone: false },
    { name: "Захватить весь мир", isDone: false },
  ]);
  return (
    <div className="App">
      <ToDoList list={toDoList} />
      <MyInput />
    </div>
  );
}

export default App;
