import React from "react";
import { Task } from "./Task";
import classes from "./styles.module.css";
export const ToDoList = ({ list, completeTask, deleteTask }) => {
  return (
    <div className={classes.wrapper}>
      {list.map((task, index) => (
        <Task
          key={index}
          id={index + 1}
          title={task.title}
          style={{ marginBottom: 10 }}
          completed={task.completed}
          completeTask={completeTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};
