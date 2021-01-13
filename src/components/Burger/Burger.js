import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

    let transformedIngredient = Object.keys(props.ingredints).map(w => {
       return [...Array(props.ingredints[w])].map((_,i)=>{
          return <BurgerIngredient type={w} key={w+i} />;
       });
    }).reduce((arr,el) => {
        return arr.concat(el)
        },[]);

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