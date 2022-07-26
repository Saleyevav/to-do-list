import React from "react";
import classes from "./styles.module.css";
import Counter from "./Counter";
import DeleteButton from "./DeleteButton";

const Menu = ({ toDoList, clearToDoList }) => {
  return (
    <div className={classes.wrapper}>
      <div>
        <Counter
          title="Tasks"
          count={toDoList.length}
          style={{ marginLeft: 10 }}
        />
        <Counter
          style={{ marginLeft: 10 }}
          title="Tasks Done"
          count={toDoList.reduce(
            (sum, item) => (item.completed ? sum + 1 : sum),
            0
          )}
        />
      </div>

      <DeleteButton
        style={{ marginLeft: 10 }}
        onBtnClickFunction={clearToDoList}
      />
    </div>
  );
};

export default Menu;
