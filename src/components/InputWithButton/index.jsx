import React from "react";
import classes from "./styles.module.css";
export const InputWithButton = React.forwardRef((props, ref) => {
  const keydown = (e) => {
    if (e.keyCode === 13) {
      props.onBtnClickFunction();
    }
  };
  return (
    <div className={classes.wrapper}>
      <div className={classes.border}>
        <input
          ref={ref}
          type="text"
          className={classes.input}
          onKeyDown={keydown}
        />
        <div className={classes.button} onClick={props.onBtnClickFunction}>
          +
        </div>
      </div>
    </div>
  );
});
