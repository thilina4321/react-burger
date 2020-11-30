import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import "./Burger.css";

const burger = (props) => {
    let transformedArr = Object.keys(props.ingredient).map(igkey=>{
        return [...Array(props.ingredient[igkey])].map((_, i)=>{
            return igkey
        });
    }).reduce((arr, el)=>{
        return arr.concat(el)
    })

    let tf = transformedArr.map((k, i)=>{
        return <BurgerIngredient key={k+i}  type={k}/>
    })

  return (
    <div className="burger">
      <BurgerIngredient type="BreadTop" />
      {tf}
      <BurgerIngredient type="BreadBottom" />

    </div>

  );
};

export default burger;
