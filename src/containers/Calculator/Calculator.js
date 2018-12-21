import React, { Component } from 'react';
import './Calculator.scss';
import Display from '../../components/Display/Display';
import Numbers from '../../components/Numbers/Numbers';

class Calculator extends Component {
  render() {
    return (
    	<div className="calculator">
        <Display/>
        <Numbers/>
        <p>Operators</p>
        <p>Other</p>
      </div>
    );
  }
}

export default Calculator;