import React, { useRef } from "react";
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
  const inputRef = useRef();
  const addToDo = () => {
    let value = inputRef.current.value;
    setToDoList([...toDoList, { name: value, isDone: false }])

  };
  return (
    <div className="App">
      <ToDoList list={toDoList} />
      <MyInput ref={inputRef} onBtnClick={addToDo} />
    </div>
  );
}

export default App;
