import React from 'react';
import Operator from './Operator/Operator';
import './Operators.scss';

const Operators = (props) => {
	const OperatorList = ["/", "x", "-", "+", "="];
	let opList = OperatorList.map((op, index) => {
		return (
			<Operator key={index} click={() => props.click(op)}>{op}</Operator>
		)
	});

  return (
  	<div className='opList'>
  		{opList}
  	</div>
  );
};

export default Operators;