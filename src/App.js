import React, { useRef } from "react";
import { useState } from "react";
import "./App.css";
import ToDoList from "./components/ToDoList";
import InputWithButton from "./components/InputWithButton";
import ToDoService from "./API/ToDoService";
import Menu from "./components/Menu";
import { useCallback } from "react";
import { useEffect } from "react";

function App() {
  const [toDoList, setToDoList] = useState([]);
  const inputRef = useRef();

  const addTask = useCallback(() => {
    let value = inputRef.current.value;
    inputRef.current.value = "";
    setToDoList([...toDoList, { title: value, completed: false }]);
  }, [toDoList]);

  const completeFunction = useCallback(
    (id) => {
      toDoList[id - 1].completed
        ? (toDoList[id - 1].completed = false)
        : (toDoList[id - 1].completed = true);
      setToDoList([...toDoList]);
    },
    [toDoList]
  );

  const clearToDoList = useCallback(() => setToDoList([]), []);

  useEffect(() => {
    setToDoList(ToDoService.getAll());
  }, []);

  return (
    <div className="App">
      <Menu toDoList={toDoList} clearToDoList={clearToDoList} />
      <ToDoList
        list={toDoList}
        setList={setToDoList}
        completeFunction={completeFunction}
      />
      <InputWithButton ref={inputRef} onBtnClickFunction={addTask} />
    </div>
  );
}

export default App;
