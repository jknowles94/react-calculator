import React, { Component } from 'react';
import './Calculator.scss';
import Display from '../../components/Display/Display';
import Numbers from '../../components/Numbers/Numbers';

class Calculator extends Component {
  state = {
    total: null,
    next: null,
    operation: null
  }

  numberInputHandler = (input) => {
    console.log("fire");
    // this will update the next value of the sum
    let numArray = [];
    if(this.state.next === null) {
      this.setState({next: input});
    } else {
      numArray.push(this.state.next, input)

      numArray = numArray.join('');

      this.setState({next: numArray});
    }
  }

  operationHandler = (input) => {

  }

  render() {
    return (
    	<div className="calculator">
        <Display value={this.state.total || this.state.next || "0"}/>
        <div className="calc_btns">
        	<div>
	        	<p>Other</p>
	        	<Numbers click={this.numberInputHandler}/>
	        </div>
	        <p>Operators</p>
	       </div>
      </div>
    );
  }
}

export default Calculator;