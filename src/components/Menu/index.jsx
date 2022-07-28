import React, { useMemo } from "react";
import classes from "./styles.module.css";
import Counter from "./Counter";
import DeleteButton from "./DeleteButton";

const Menu = ({ toDoList, clearToDoList }) => {
  const completedTasks = useMemo(
    () => toDoList.filter((task) => task.completed),
    [toDoList]
  );

  return (
    <div className={classes.wrapper}>
      <div>
        <Counter title="Tasks" count={toDoList.length} />
        <Counter
          style={{ marginLeft: 10 }}
          title="Tasks Done"
          count={completedTasks.length}
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
