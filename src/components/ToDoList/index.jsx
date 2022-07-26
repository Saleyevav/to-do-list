import React from "react";
import Task from "./Task";
import classes from "./styles.module.css";
const ToDoList = ({ list, completeFunction }) => {
  return (
    <div className={classes.wrapper}>
      {list.map((task, index) => (
        <Task
          key={index}
          id={index + 1}
          title={task.title}
          style={{ marginBottom: 10 }}
          completed={task.completed}
          completeFunction={completeFunction}
        />
      ))}
    </div>
  );
};

export default ToDoList;
