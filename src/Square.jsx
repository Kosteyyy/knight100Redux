import React from 'react';

export default function Square({ dark, children }) {
	const fill = dark ? "#cc6600" : "white";
  
  //square-inner-element is technical class to make square responsive square
	return (
		<div className="square-inner-element" style={{backgroundColor: fill}}>
			{children}
		</div>
	)
}