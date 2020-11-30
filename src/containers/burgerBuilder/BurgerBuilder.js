import { Component, Fragment } from "react";
import Burger from "../../components/Burger/Burger";
import BurgerController from "../../components/Burger/BurgerControl/BurgerCon";
import BurgerSummery from "../../components/Burger/OrderSummery/OrderSummery";

const INGREDIENT_PRICES = {
  Cheese: 1,
  Meat: 2,
  Bacon: 3,
  Salad: 4,
};

class BurgerBuilder extends Component {
  state = {
    ingredient: { Cheese: 0, Meat: 0, Bacon: 0, Salad: 0 },
    totalPrice: 0,
  };

  addHandler = (type) => {
    let newCount = this.state.ingredient[type] + 1;
    let updatedIng = {...this.state.ingredient}
    updatedIng[type] = newCount
    let totalPrice = this.state.totalPrice + INGREDIENT_PRICES[type]
    this.setState({
        ingredient: updatedIng,
        totalPrice:totalPrice
    });
  };

  removeHandler = (type) => {
      if(this.state.ingredient[type] <= 0){
          return;
      }
    let newCount = this.state.ingredient[type] - 1;
    let updatedIng = {...this.state.ingredient}
    updatedIng[type] = newCount
    let totalPrice = this.state.totalPrice - INGREDIENT_PRICES[type]

    // let updatedPrice = this.state.totalPrice + INGREDIENT_PRICES[type]
    this.setState({
        ingredient: updatedIng,
        totalPrice:totalPrice
    });
  };

  render() {
    return (
      <Fragment>
        <Burger 
        
        ingredient={this.state.ingredient} />
        <BurgerController 
        
        price={this.state.totalPrice}
        less={this.removeHandler}
        more={this.addHandler} />

        <BurgerSummery summery={this.state.ingredient}/>
      </Fragment>
    );
  }
}

export default BurgerBuilder;
