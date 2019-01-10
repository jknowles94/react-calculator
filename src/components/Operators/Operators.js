import React from 'react';
import Operator from './Operator/Operator';
import './Operators.scss';

const Operators = (props) => {
	const OperatorList = ["/", "*", "-", "+", "="];
	let opList = OperatorList.map((op, index) => {
		if(op === "*") {
			return (
				<Operator key={index} click={() => props.click(op)}>x</Operator>
			)
		} else {
			return (
				<Operator key={index} click={() => props.click(op)}>{op}</Operator>
			)
		}
	});

  return (
  	<div className='opList'>
  		{opList}
  	</div>
  );
};

export default Operators;