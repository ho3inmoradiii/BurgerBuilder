import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label:"سالاد",type:"salad"},
    {label:"مخلفات",type:"bacon"},
    {label:"گوشت",type:"meat"},
    {label:"پنیر",type:"cheese"},
];

const buildControls = () => (

        <div className={classes.BuildControls}>
            {controls.map(ctrl => (
                <BuildControl label={ctrl.label} key={ctrl.label} />
                ))}
        </div>

);

export default buildControls;