import React from 'react';
import './Operator.scss';

const Operator = (props) => {
	let classes = props.type === "grey" ? ["OperatorBtn", "grey"] : ["OperatorBtn"]
  return (
  	<div className={classes.join(' ')} onClick={props.click}>
  		{props.children}
  	</div>
  );
};

export default Operator;