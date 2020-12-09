import { Component, Fragment } from "react";
import Burger from "../../components/Burger/Burger";
import BurgerController from "../../components/Burger/BurgerControl/BurgerCon";
import BurgerSummery from "../../components/Burger/OrderSummery/OrderSummery";

import axios from '../../Axios'


const INGREDIENT_PRICES = {
  Cheese: 1,
  Meat: 2,
  Bacon: 3,
  Salad: 4,
};

class BurgerBuilder extends Component {
  state = {
    ingredient: null ,
    totalPrice: 0,
    isLoading :false
  };

  async componentDidMount(){
    const ingredients = await axios.get('ingredients.json')
    console.log(ingredients.data);
    this.setState({
      ingredient:ingredients.data
    })
  }

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
        { this.state.ingredient &&
          <div>
            <Burger          
            ingredient={this.state.ingredient} />
            <BurgerController 
            price={this.state.totalPrice}
            less={this.removeHandler}
            more={this.addHandler} />

            <BurgerSummery 
            total={this.state.totalPrice}
            summery={this.state.ingredient}/>
          </div>  
        }   
      </Fragment>
    );
  }
}

export default BurgerBuilder;
