import React from "react";
import classes from "./styles.module.css";
import Counter from "./Counter";
import DeleteButton from "./DeleteButton";

const Menu = ({ toDoList, clearToDoList }) => {
  return (
    <div className={classes.wrapper}>
      <div>
        <Counter title="Tasks" count={toDoList.length} />

        <Counter
          style={{ marginLeft: 10 }}
          className={classes.marginLeft}
          title="Tasks Done"
          count={toDoList.reduce(
            (sum, item) => (item.completed ? sum + 1 : sum),
            0
          )}
        />
      </div>
      <DeleteButton
        onBtnClickFunction={clearToDoList}
        style={{ marginLeft: 10 }}
      />
    </div>
  );
};

export default Menu;
