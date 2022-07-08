import React from "react";
import classes from './styles.module.css';

const ToDo = ({ name, id, style }) => {
  return (
    <div className={classes.wrapper} style={style}>
      <div className={classes.button} ></div>
      <span>{id}. {name}</span>
    </div>
  );
};

export default ToDo;
