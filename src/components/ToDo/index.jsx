import React from "react";
import classes from './styles.module.css';

const ToDo = ({ name, id, style, isDone }) => {
  let textStyle = '';
  isDone ? textStyle = 'isDone' : textStyle = 'notDone';
  const onBtnClickFunction = () => {
    console.log('#' + id + ' is click')

  }
  return (
    <div className={classes.wrapper} style={style}>
      <div className={classes.button} onClick={onBtnClickFunction}></div>
      <span className={classes[textStyle]}>{id}. {name}</span>
    </div>
  );
};

export default ToDo;
