import { Component } from "react";
import Layout from "./components/layout/Layout";
import BurgerBuilder from './containers/burgerBuilder/BurgerBuilder'

class App extends Component {
  render() {
    return (
      <Layout>
        <BurgerBuilder></BurgerBuilder>
      </Layout>
    );
  }
}

export default App;
