import React from "react";
import classes from './styles.module.css';

const ToDo = ({ title, id, style, completed }) => {
  let textStyle = '';
  completed ? textStyle = 'completed' : textStyle = 'notCompleted';
  const onBtnClickFunction = () => {
    console.log('#' + id + ' is click')

  }
  return (
    <div className={classes.wrapper} style={style}>
      <div className={classes.button} onClick={onBtnClickFunction}></div>
      <span className={classes[textStyle]}>{id}. {title}</span>
    </div>
  );
};

export default ToDo;
