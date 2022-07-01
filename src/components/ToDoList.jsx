import React from "react";
import ToDo from "./ToDo";
const ToDoList = ({ list }) => {
  return (
    <div>
      {list.map((toDo, index) => (
        <ToDo key={index} id={index + 1} name={toDo.name} />
      ))}
    </div>
  );
};

export default ToDoList;
