import React, { useRef } from "react";
import { useState } from "react";
import "./App.css";
import ToDoList from "./components/ToDoList";
import InputWithButton from "./components/ImputWithButton";
import ToDoService from "./API/ToDoService";

function App() {
  const [toDoList, setToDoList] = useState(ToDoService.getAll());
  const inputRef = useRef();

  const addToDo = () => {
    let value = inputRef.current.value;
    setToDoList([...toDoList, { title: value, completed: false }])
  };

  const completeFunction = (id) => {
    toDoList[id - 1].completed ? toDoList[id - 1].completed = false : toDoList[id - 1].completed = true;
    setToDoList([...toDoList]);
  };

  return (
    <div className="App">
      <ToDoList list={toDoList} setList={setToDoList} completeFunction={completeFunction} />
      <InputWithButton ref={inputRef} onBtnClickFunction={addToDo} />
    </div>
  );
}

export default App;
