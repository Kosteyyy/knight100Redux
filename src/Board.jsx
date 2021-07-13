import React from 'react';
import Knight from './Knight.jsx';
import Square from './Square.jsx';

function renderSquare(i, [knightX, knightY], moveKnight, moveNumber) {
	const x = i % 10;
	const y = Math.floor( i/10 );
	const dark = ( x + y ) % 2 === 1;
	const isKnightThere = i === knightX + knightY * 10;
	
	return (
		<div className="square" key={i} onClick={() => moveKnight(x, y)}>
			<Square dark={dark}>{isKnightThere ? <Knight /> : moveNumber}</Square>
		</div>
	);
}

export default function Board({ knightPosition, moveKnight, movesField }) {
	// to change font-size when board size change get width of board
	let boardFontSize = document.getElementById('knight100-container').offsetWidth / 14;
	const squares = [];
	for (let i=0; i < 100; i++) {
		squares.push(renderSquare(i, knightPosition, moveKnight, movesField[i]));
	}

	return (
		<div className="board" style={{fontSize: boardFontSize}}>
			{squares}
		</div>
	)
}