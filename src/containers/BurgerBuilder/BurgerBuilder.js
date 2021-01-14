import React , {Component} from 'react';
import Auxi from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const priceIngredients = {
    salad:1,
    cheese: 1.2,
    meat: 1.5,
    bacon: 0.8,
}

class BurgerBuilder extends Component{

    state = {
        ingredients : {
            salad:0,
            cheese:0,
            meat:0,
            bacon:0,
        },
        totalPrice:4
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = priceIngredients[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState( { totalPrice: newPrice, ingredients: updatedIngredients } );
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0){
            return;
        }
        const updateCount = oldCount-1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updateCount;
        const priceRemove = priceIngredients[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice-priceRemove;
        this.setState({ingredients : updatedIngredients,totalPrice:newPrice});
    }

    render() {

        const disabledInfo = {
            ...this.state.ingredients
        }

        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        return(
            <Auxi>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    addIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler}
                    disabled={disabledInfo}
                />

            </Auxi>
        );
    }
}

export default BurgerBuilder;