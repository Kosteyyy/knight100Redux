import React, { useState, useEffect } from 'react';
import Board from "./Board.jsx";
import Start from "./Start.jsx";
import Restart from "./Restart.jsx";
import "./appstyles.css";

export default function Knight100Game() {
	const [gameStatus, setGameStatus] = useState("start");
	const [knightPosition, setKnightPosition] = useState([0,0]);
	let emptyArray = new Array(100);
	const [movesField, setMovesField] = useState(emptyArray);
	const [moveCount, setMoveCount] = useState(1);

	useEffect(() => {
		if (moveCount === 100) {
			setGameStatus("win")
		} else if (cantMove()) {
			setGameStatus("lost")
		};
	}, [knightPosition]);

	const restartGame = () => {
		setMovesField(emptyArray);
		setKnightPosition([0,0]);
		setMoveCount(1);
		setGameStatus("play");
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
								<h1 className="win">Вы победили!!!</h1><Restart restart={restartGame} />
							</>
			case "lost": 
				return <>
								<Board knightPosition={knightPosition} moveKnight={moveKnight} movesField={movesField} /> 
								<h1 className="lost">Вы проиграли!!!</h1><Restart restart={restartGame}/>
							</>				
			default:
				return <Board knightPosition={knightPosition} moveKnight={moveKnight} movesField={movesField} /> ;
		}
	}
	
	return (
		<div id="knight100-container">
			{gameStatus === "start" && <Start setGameStatus={setGameStatus}/>}
			{gameStatus !== "start" && <Board knightPosition={knightPosition} moveKnight={moveKnight} movesField={movesField} /> }
			{gameStatus === "win" && <h1 className="win">Вы победили!!!</h1>}
			{gameStatus === "lost" && <h1 className="lost">Вы проиграли!!!</h1>}
			{gameStatus !== "start" && <Restart restart={restartGame} />}
		</div>
	)
}