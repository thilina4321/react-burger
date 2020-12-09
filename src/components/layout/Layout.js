import { AppBar, Button, ListItemText, Toolbar } from '@material-ui/core';
import {Component, Fragment} from 'react';
import './Layout.css';

import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

class Layout extends Component{

  state = {
    open:false
  }

  toggleDrawer = (op)=>{
    this.setState({open:op})
  }

   list = () => (
    <div onClick={()=>this.toggleDrawer(false)}>
      <List>
        {['Burger Builder', 'Check out'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  render(){

  return  <Fragment>
    <AppBar position="fixed">
        <Toolbar>
          <Button  
            color="inherit"
            onClick={()=>this.toggleDrawer(true)}>
            Menu
          </Button>
        <Drawer open={this.state.open === true}
        anchor="top" onClose={()=>this.toggleDrawer(false)}>
          {this.list()}
        </Drawer>
        </Toolbar>
      </AppBar>

        <main className="layout__main">
            {this.props.children}
        </main>
    </Fragment>
}
}

export default Layout