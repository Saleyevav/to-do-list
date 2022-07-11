import React from "react";
import classes from './styles.module.css';

const ToDo = ({ title, id, style, completed, completeFunction }) => {
  let textStyle = '';
  completed ? textStyle = 'completed' : textStyle = 'notCompleted';
  return (
    <div className={classes.wrapper} style={style}>
      <div className={classes.button} onClick={() => completeFunction(id)}></div>
      <span className={classes[textStyle]}>{id}. {title}</span>
    </div>
  );
};

export default ToDo;
