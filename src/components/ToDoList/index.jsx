import React from "react";
import ToDo from "../ToDo";
import classes from './styles.module.css';
const ToDoList = ({ list }) => {
  return (
    <div className={classes.wrapper}>
      {list.map((toDo, index) => (
        <ToDo key={index} id={index + 1} title={toDo.title} style={{ marginBottom: 10 }} completed={toDo.completed} />
      ))}
    </div>
  );
};

export default ToDoList;
