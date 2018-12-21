import React from 'react';
import NumberButton from './NumberButton/NumberButton';

const Numbers = (props) => {
	const NumberList = [1,2,3,4,5,6,7,8,"."];

	let btns = NumberList.map((item, index) => {
		return ( 
			<NumberButton key={index}>{item}</NumberButton>
 		);
	});

  return (
  	<React.Fragment>
  		{btns}
  	</React.Fragment>
  );
};

export default Numbers;