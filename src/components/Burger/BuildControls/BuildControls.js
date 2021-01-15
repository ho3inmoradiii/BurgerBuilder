import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label:"سالاد",type:"salad"},
    {label:"مخلفات",type:"bacon"},
    {label:"گوشت",type:"meat"},
    {label:"پنیر",type:"cheese"},
];

const buildControls = (props) => (

        <div className={classes.BuildControls}>
            <p>قیمت کل:<span style={{fontWeight:"bold",marginRight:"15px",fontSize:"18px"}}>${props.totalPrice.toFixed(2)}</span></p>
            {controls.map(ctrl => (
                <BuildControl
                    label={ctrl.label} key={ctrl.label}
                    added={() => props.addIngredient(ctrl.type)}
                    removed={()=>props.removeIngredient(ctrl.type)}
                    //disabled={props.disabled[ctrl.type]}
                    disabled={props.disabled[ctrl.type]}
                />
                ))}
                <button className={classes.OrderButton} disabled={props.totalPrice > 4 ? false :true} onClick={props.modalDisplay}>سفارش</button>
        </div>

);

export default buildControls;