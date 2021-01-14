import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

    let transformedIngredient = Object.keys( props.ingredients )
        .map( igKey => {
            return [...Array( props.ingredients[igKey] )].map( ( _, i ) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            } );
        } )
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);

    if (transformedIngredient.length === 0){
        transformedIngredient = <p>یه چیزی بخر از گشنگی نمیری</p>
    }

    return (
      <div className={classes.Burger}>
          <BurgerIngredient type="bread-top"></BurgerIngredient>
          {transformedIngredient}
          <BurgerIngredient type="bread-bottom"></BurgerIngredient>
      </div>
    );
}

export default burger;