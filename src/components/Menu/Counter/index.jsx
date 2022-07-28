import React from "react";
import classes from "./styles.module.css";
export const Counter = ({ title, count, ...props }) => {
  return (
    <div className={classes.wrapper} style={props.style}>
      <div className={classes.title}>{title} </div>
      <div className={classes.count}>{count}</div>
    </div>
  );
};
