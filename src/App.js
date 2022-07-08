import React, { useRef } from "react";
import { useState } from "react";
import "./App.css";
import ToDoList from "./components/ToDoList";
import InputWithButton from "./components/ImputWithButton";

function App() {
  const [toDoList, setToDoList] = useState([
    { name: "Проснуться", isDone: false },
    { name: "Умыться", isDone: true },
    { name: "Захватить весь мир", isDone: false },
  ]);
  const inputRef = useRef();
  const addToDo = () => {
    let value = inputRef.current.value;
    setToDoList([...toDoList, { name: value, isDone: false }])

  };
  return (
    <div className="App">
      <ToDoList list={toDoList} setList={setToDoList} />
      <InputWithButton ref={inputRef} onBtnClickFunction={addToDo} />
    </div>
  );
}

export default App;
