import React from "react";
import classes from './styles.module.css';
const InputWithButton = React.forwardRef((props, ref) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.border}>
                <input ref={ref} type="text" className={classes.input} />
                <div className={classes.button} onClick={props.onBtnClickFunction}>+</div>
            </div>
        </div>
    );
});

export default InputWithButton;
