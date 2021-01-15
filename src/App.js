import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {

    state = {
        sideDrawer : false
    }

    SideDrawerShow = () => {
        this.setState({sideDrawer:!this.state.sideDrawer})
    }



  render() {
    return (
      <div>
        <Layout sideDrawerShow={this.SideDrawerShow} sideShow={this.state.sideDrawer}>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
