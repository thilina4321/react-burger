import { Button } from "@material-ui/core";
import "./BurgerCon.css";
const burgerContl = (props) => {
  const ctrl = [
    { label: "Cheese", type: "Cheese" },
    { label: "Meat", type: "Meat" },
    { label: "Bacon", type: "Bacon" },
    { label: "Salad", type: "Salad" },
  ];

  return (
    <div className="bctrl__main">
    <div className="burCtrl">
           <p> Totol price : {props.price} </p>
      {ctrl.map((el) => {
        return (
          <div className="burCtrl__a"
          key={el.label}>
            <span className="burCtrl__span"> {el.label}</span>


            <Button color="primary" variant="contained"
              onClick={() => props.more(el.type)}> More</Button>

            <Button variant="contained" color="primary" 
              onClick={() => props.less(el.type)}>Less</Button> 
              
          </div>
        );
      })}

      
    </div>
    </div>
  );
};

export default burgerContl;
