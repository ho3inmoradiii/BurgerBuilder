import React from 'react';
import Auxi from '../../../../hoc/Auxi';
import classes from './BuildControl.css';

const buildControl = (props) => (

            <div className={classes.BuildControl}>
                <div className={classes.Label}>{props.label}</div>
                <button className={classes.Less}>اضافه کردن</button>
                <button className={classes.More}>حذف کردن</button>
            </div>

);

export default buildControl;