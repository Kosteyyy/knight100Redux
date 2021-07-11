import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Board from "./Board.jsx";
import Start from "./Start.jsx";
import Restart from "./Restart.jsx";


function App() {
	const [gameStatus, setGameStatus] = useState("start");
	const [knightPosition, setKnightPosition] = useState([0,0]);
	let emptyArray = new Array(100);
	const [movesField, setMovesField] = useState(emptyArray);
	const [moveCount, setMoveCount] = useState(1);

	useEffect(() => {
		if (moveCount === 100) {setGameStatus("win")};
		if (cantMove()) {setGameStatus("lost")};
	}, [knightPosition]);

	const restartGame = () => {
		setMovesField(emptyArray);
		setKnightPosition([0,0]);
		setMoveCount(1);
	}

	const canKnightMove = (ToX, ToY) => {
		if (movesField[getSquareIndex([ToX, ToY])] > 0) return false;
		const difX = Math.abs(ToX - knightPosition[0]);
		const difY = Math.abs(ToY - knightPosition[1]);
		return (difX === 2 && difY === 1) || (difX === 1 && difY === 2);
	}
  
	const getSquareIndex = ([x, y]) => (x + y * 10);

	const cantMove = () => {
		let possiblemoves = 0;
		for (let i=0; i<100; i++) {
			const x = i % 10;
			const y = Math.floor(i / 10);
			if (canKnightMove(x, y)) {possiblemoves++};
		}
		return possiblemoves === 0;
	}

	const moveKnight = (ToX, ToY) => {
		if (canKnightMove(ToX, ToY)) {
			setMoveCount(moveCount + 1);
			let tempArray = [...movesField];
			tempArray[getSquareIndex([...knightPosition])] = moveCount;	
			setMovesField(tempArray);
			setKnightPosition ([ToX, ToY]);
		}
		return true;
	}

	const renderGame = () => {
		switch(gameStatus) {
			case "start":
				return <Start setGameStatus={setGameStatus}/>;
			case "play":
				return <>
								<Board knightPosition={knightPosition} moveKnight={moveKnight} movesField={movesField} /> 
								<Restart restart={restartGame} />
							</>
			case "win": 
				return <>
								<Board knightPosition={knightPosition} moveKnight={moveKnight} movesField={movesField} /> 
								<h1>You Won!!!</h1>
							</>
			case "lost": 
				return <>
								<Board knightPosition={knightPosition} moveKnight={moveKnight} movesField={movesField} /> 
								<h1>Вы проиграли!!!</h1><Restart />
							</>				
			default:
				return <Board knightPosition={knightPosition} moveKnight={moveKnight} movesField={movesField} /> ;
		}
	}
	
	return (
		<div className="container">{renderGame()}	</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));