import React from "react";
import classes from './MyInput.module.css';
const MyInput = React.forwardRef((props, ref) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.border}>
                <input ref={ref} type="text" className={classes.input} />
                <div className={classes.button} onClick={props.onBtnClick}>+</div>
            </div>
        </div>
    );
});

export default MyInput;
