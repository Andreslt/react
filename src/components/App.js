import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

import items from '../data/sample'

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  }
  render() {
    return (
      <div className="App">
        <Header title="pluriza" items={items}/>
        <Content body={this.props.children} />
        <Footer/>
      </div>
    );
  }
}

export default App;
