import React from 'react';
import NumberButton from './NumberButton/NumberButton';
import './Numbers.scss';

const Numbers = (props) => {
	const NumberList = [1,2,3,4,5,6,7,8,9,0,"."];

	let btns = NumberList.map((item, index) => {
		return ( 
			<NumberButton click={() => props.click(item)} key={index}>{item}</NumberButton>
 		);
	});

  return (
  	<div className="numbers">
  		{btns}
  	</div>
  );
};

export default Numbers;