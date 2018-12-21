import React, { Component } from 'react';
import './Calculator.scss';
import Display from '../../components/Display/Display';

class Calculator extends Component {
  render() {
    return (
    	<div className="calculator">
        <Display/>
        <p>Numbers</p>
        <p>Operators</p>
        <p>Other</p>
      </div>
    );
  }
}

export default Calculator;