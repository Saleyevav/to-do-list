import React from "react";
import classes from "./styles.module.css";

export const Task = ({
  title,
  id,
  style,
  completed,
  completeTask,
  deleteTask,
}) => {
  let textStyle = "";
  completed ? (textStyle = "completed") : (textStyle = "notCompleted");
  return (
    <div className={classes.wrapper} style={style}>
      <div className={classes.button} onClick={() => completeTask(id)}></div>
      <span className={classes[textStyle]}>
        {id}. {title}
      </span>
      <div
        className={classes.deleteButton}
        onClick={() => deleteTask(id)}
      ></div>
    </div>
  );
};
