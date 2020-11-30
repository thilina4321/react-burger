import "./BurgerCon.css";
const burgerContl = (props) => {
  const ctrl = [
    { label: "Cheese", type: "Cheese" },
    { label: "Meat", type: "Meat" },
    { label: "Bacon", type: "Bacon" },
    { label: "Salad", type: "Salad" },
  ];

  return (
    <div className="burCtrl">
           <p> Totol price : {props.price} </p>
      {ctrl.map((el) => {
        return (
          <div key={el.label}>
            <span className="burCtrl__span"> {el.label}</span>
            <button
              onClick={() => props.more(el.type)}
              className="burCtrl__btn"
            >
              {" "}
              More{" "}
            </button>
            <button
              onClick={() => props.less(el.type)}
              className="burCtrl__btn"
            >
              {" "}
              Less{" "}
            </button>
          </div>
        );
      })}
      <button disabled={props.price === 0}
       className="bcOrder"> Order Now </button>
    </div>
  );
};

export default burgerContl;
