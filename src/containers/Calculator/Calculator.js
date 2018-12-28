import React, { Component } from 'react';
import './Calculator.scss';
import Display from '../../components/Display/Display';
import Numbers from '../../components/Numbers/Numbers';
import Operators from '../../components/Operators/Operators';
import Operator from '../../components/Operators/Operator/Operator';

class Calculator extends Component {
  state = {
    total: null,
    next: null  
  }

  numberInputHandler = (input) => {
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

  operationHandler = (operation) => {
    //Somehow find the logic to get the operator and store the next value then reset to get the next value
    switch(operation) {
      case("AC"):
        this.setState({
          total: null,
          next: null
        });
      break;

      case("="):
        //Do some equel logic for the finished sum
      break;

      default:
        console.log("default operators here");
    }

  }

  render() {
    return (
    	<div className="calculator">
        <Display value={this.state.total || this.state.next || "0"}/>
        <div className="calc_btns">
        	<div>
	        	<div className="numbers">
              <Operator click={() => this.operationHandler("AC")} type="grey">AC</Operator>
              <Operator click={() => this.operationHandler("+/-")} type="grey">+/-</Operator>
              <Operator click={() => this.operationHandler("%")} type="grey">%</Operator>
            </div>
	        	<Numbers click={this.numberInputHandler}/>
	        </div>
	        <Operators click={this.operationHandler}/>
	       </div>
      </div>
    );
  }
}

export default Calculator;