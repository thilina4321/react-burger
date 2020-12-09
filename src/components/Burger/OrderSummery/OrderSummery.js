import { Component } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@material-ui/core";
import "./orderSummery.css";

import axios from '../../../Axios'
import Spinner from '../../UI/Spinner'


class OrderSummery extends Component {
  state = {
    toggleBtn: false,
    isLoaing:false
  };

  toggleSummeryButton = () => {
    let toggle = !this.state.toggleBtn;
    this.setState({
      toggleBtn: toggle,
    });
  };

  purchaseOrder = async()=> {
    this.setState({
      toggleBtn: false,
    });
    this.setState({
      isLoaing :true
    })
    console.log(this.props.summery);
    await axios.post('orders.json', {
      ingredients:this.props.summery,
      total:this.props.total
    })
    this.setState({
      isLoaing :false
    })
  }

  render() {
    return (
      <div className="summery">

      {this.state.isLoaing && <Spinner/>}
        <Button
          className="summeryBtn"
          color="primary"
          onClick={this.toggleSummeryButton}
        >
          Show Summery
        </Button>


        <Dialog
        open={this.state.toggleBtn}
        onClose={this.toggleSummeryButton}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
        {"Your order details"}</DialogTitle>
        <DialogContent>
        
        {Object.keys(this.props.summery).map((va, i) => {
            return this.props.summery[va] > 0 ? (
              <p key={va + i}> {va} -- {this.props.summery[va]} </p>
            ) : null;
          })}

          <p> Your total price : {this.props.total} </p>
          <p> Do you want to continue </p>
          <Button onClick={this.toggleSummeryButton} color="primary"> Cancel </Button>
          <Button
           onClick={this.purchaseOrder} color="secondary"> Ok </Button>
          
          
        </DialogContent>
        <DialogActions>
          
        </DialogActions>
      </Dialog>

        
      </div>
    );
  }
}

export default OrderSummery;


// <Dialog
//           onClose={this.toggleSummeryButton}
//           selectedValue={
//             this.state.toggleBtn &&
            
//           }
//           open={this.state.toggleBtn}
//         />