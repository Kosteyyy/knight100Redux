import React from 'react';

export default function Square({ dark, children }) {
	const fill = dark ? "#cc6600" : "white";

	return (
		<div style={{backgroundColor: fill, widgh: "100%", height: "100%" }}>
			{children}
		</div>
	)
}