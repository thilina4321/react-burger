import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import {Fragment} from 'react';
import './Layout.css';

const layout = (props)=>(
    <Fragment>
    <AppBar position="fixed">
        <Toolbar>
          
          <Typography variant="h6" >
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

        <main className="layout__main">
            {props.children}
        </main>
    </Fragment>
)

export default layout