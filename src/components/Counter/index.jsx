import React from "react";
import classes from "./styles.module.css";
const Counter = ({ title, count }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.title}>{title} </div>
      <div className={classes.count}>{count}</div>
    </div>
  );
};

export default Counter;
