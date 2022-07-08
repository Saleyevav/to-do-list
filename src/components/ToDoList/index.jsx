import React from "react";
import ToDo from "../ToDo";
import classes from './styles.module.css';
const ToDoList = ({ list, setList }) => {
  return (
    <div className={classes.wrapper}>
      {list.map((toDo, index) => (
        <ToDo key={index} id={index + 1} name={toDo.name} style={{ marginBottom: 10 }} isDone={toDo.isDone} />
      ))}
    </div>
  );
};

export default ToDoList;
