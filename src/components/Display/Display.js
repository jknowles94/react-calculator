import React from 'react';
import './Display.scss';

const Display = (props) => {
  return (
  	<div className="display">
  		{props.value}
  	</div>
  );
};

export default Display;