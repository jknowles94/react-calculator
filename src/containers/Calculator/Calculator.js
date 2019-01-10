import React, { Component } from 'react';
import './Calculator.scss';
import Display from '../../components/Display/Display';
import Numbers from '../../components/Numbers/Numbers';
import Operators from '../../components/Operators/Operators';
import Operator from '../../components/Operators/Operator/Operator';

class Calculator extends Component {
  state = {
    total: ""  
  }

  numberInputHandler = (input) => {
    if(this.state.total === null) {
      this.setState({total: input});
    } else {
      this.setState({total: this.state.total + input});
    }
  }

  operationHandler = (operation) => {
    //Somehow find the logic to get the operator and store the total value then reset to get the total value
    switch(operation) {
      case("AC"):
        this.setState({
          total: ""
        });
      break;

      case("="):
        this.setState((prevState) => {
          return {total: eval(prevState.total)} 
        });
      break;

      default:
        this.numberInputHandler(operation);
    }

  }

  render() {
    return (
    	<div className="calculator">
        <Display value={this.state.total || "0"}/>
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