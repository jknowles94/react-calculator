import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Calculator from './containers/Calculator/Calculator';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>React Calculator</h1>
        <Calculator/>
      </React.Fragment>
    );
  }
}

export default App;
