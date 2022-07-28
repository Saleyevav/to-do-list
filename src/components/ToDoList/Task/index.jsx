import React from "react";
import classNames from "classnames";
import classes from "./styles.module.css";

export const Task = ({
  title,
  id,
  style,
  completed,
  completeTask,
  deleteTask,
}) => {
  return (
    <div className={classes.wrapper} style={style}>
      <div
        className={classNames(classes.button, classes.completeButton)}
        onClick={() => completeTask(id)}
      ></div>
      <span className={classNames({ [classes.completed]: completed })}>
        {id}. {title}
      </span>
      <div
        className={classNames(classes.button, classes.deleteButton)}
        onClick={() => deleteTask(id)}
      ></div>
    </div>
  );
};
