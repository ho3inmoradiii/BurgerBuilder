import React from 'react';
import classes from './BuildControl.css';

const buildControl = (props) => (

            <div className={classes.BuildControl}>
                <div className={classes.Label}>{props.label}</div>
                <button className={classes.Less} onClick={props.added}>اضافه کردن</button>
                <button className={classes.More} onClick={props.removed} disabled={props.disabled > 0 ? false : true}>حذف کردن</button>
            </div>

);

export default buildControl;