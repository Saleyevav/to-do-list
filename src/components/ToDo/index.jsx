import React from "react";
import classes from './styles.module.css';

const ToDo = ({ name, id }) => {
  return (
    <div className={classes.wrapper} >
      <div className={classes.button} ></div>
      <span>{id}. {name}</span>
    </div>
  );
};

export default ToDo;
