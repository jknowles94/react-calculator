import React from 'react';
import './NumberButton.scss';

const NumberButton = (props) => {
	let classes = props.children === 0 ? ["NumberBtn", "grow"] : ["NumberBtn"];
  return (
  	<div className={classes.join(' ')} onClick={props.click}>
  		{props.children}
  	</div>
  );
};

export default NumberButton;