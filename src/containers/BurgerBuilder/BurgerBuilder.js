import React , {Component} from 'react';
import Auxi from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from  '../../components/Burger/OrderSummary/OrderSummary';

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
        totalPrice:4,
        modal:false
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

    modalDisplay = () => {
        this.setState({modal:!this.state.modal});
    }

    purchaseContinue = () => {
        alert('hi');
    }

    render() {

        const disabledInfo = {
            ...this.state.ingredients
        }

        /*for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }*/

        return(
            <Auxi>
                <Modal modal={this.state.modal} modalDisplay={this.modalDisplay}>
                    <OrderSummary order={this.state.ingredients}
                                  modal={this.state.modal}
                                  modalDisplay={this.modalDisplay}
                                  purchaseContinued={this.purchaseContinue}
                                  totalPrice={this.state.totalPrice}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    addIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    totalPrice={this.state.totalPrice}
                    modalDisplay={this.modalDisplay}
                    modal={this.state.modal}
                />

            </Auxi>
        );
    }
}

export default BurgerBuilder;