import React from "react";
import classes from "./styles.module.css";
import trash from "./images/trash.png";
const DeleteButton = (props) => {
  return (
    <div
      onClick={props.onBtnClickFunction}
      className={classes.wrapper}
      style={props.style}
    >
      <img src={trash} alt="trash" className={classes.img} />
      Tasks
    </div>
  );
};

export default DeleteButton;
