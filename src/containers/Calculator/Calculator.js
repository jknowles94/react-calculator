import React, { Component } from 'react';
import './Calculator.scss';
import Display from '../../components/Display/Display';
import Numbers from '../../components/Numbers/Numbers';

class Calculator extends Component {
  render() {
    return (
    	<div className="calculator">
        <Display/>
        <div className="calc_btns">
        	<div>
	        	<p>Other</p>
	        	<Numbers/>
	        </div>
	        <p>Operators</p>
	       </div>
      </div>
    );
  }
}

export default Calculator;