import React from "react";
import classes from './MyInput.module.css';
const MyInput = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.border}>
                <input type="text" className={classes.input} />
                <div className={classes.button}><div>+</div></div>

            </div>
        </div>
    );
}

export default MyInput;
<input type="text" />