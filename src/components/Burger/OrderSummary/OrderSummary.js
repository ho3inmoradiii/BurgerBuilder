import React from 'react';
import classes from './OrderSummary.css';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const OrderItem = Object.keys(props.order)
        .map(igKey => {
            return <li style={{direction:"rtl"}} key={igKey}>{igKey} : {props.order[igKey]}</li>
        });
    return(
        <div className={props.modal ? null : classes.OrderSummary}>
            <h4 style={{direction:"rtl",textAlign:"center"}}>جزئیات سفارش شما:</h4>
            <ul>
                {OrderItem}
            </ul>
            <p>آیا میخوای سفارشت رو نهایی کنی؟؟</p>
            <p><strong>قیمت کل سفارش شما:</strong>${props.totalPrice}</p>
            <div className={classes.buttonSection}>
                <Button btnType="Danger" clicked={props.modalDisplay}>لغو</Button>
                <Button btnType="Success" clicked={props.purchaseContinued}>ادامه</Button>
            </div>
        </div>
    );
}

export default orderSummary;