import React, { useReducer, useEffect } from 'react';
import Board from "./Board.jsx";
import Start from "./Start.jsx";
import Restart from "./Restart.jsx";
import reducer from "./reducer.js";
import { Provider, connect } from 'react-redux';
import "./appstyles.css";

function Knight100Game(props) {
	const {status, knightPosition, movesField, moveCount, dispatch} = props;

	useEffect(() => {
		if (moveCount === 100) {
			dispatch({ type: "WIN" })
		} else if (cantMove()) {
			dispatch({ type: "LOST" })
		};
	}, [knightPosition]);

	const restartGame = () => {
		dispatch({ type: "START_GAME" });
	}

	const canKnightMove = (ToX, ToY) => {
		if (movesField[getSquareIndex([ToX, ToY])] > 0) return false; // if field already used
		const difX = Math.abs(ToX - knightPosition[0]);
		const difY = Math.abs(ToY - knightPosition[1]);
		return (difX === 2 && difY === 1) || (difX === 1 && difY === 2);
	}
  
	const getSquareIndex = ([x, y]) => (x + y * 10); //returns index of square from coordinates 

	const cantMove = () => {
		let possiblemoves = 0;
		for (let i=0; i<100; i++) {
			const x = i % 10;
			const y = Math.floor(i / 10);
			if (canKnightMove(x, y)) {possiblemoves++};
		}
		return possiblemoves === 0; //can't move if 0 squares to move
	}

	const moveKnight = (ToX, ToY) => {
		if (canKnightMove(ToX, ToY)) {
			dispatch({ 
				type: "MOVE_KNIGHT",
				payload: [ToX, ToY]})
		}
		return true;
	}

	return (
		<div id="knight100-container">
			{status === "start" && <Start startGame={restartGame}/>}
			{status !== "start" && <Board knightPosition={knightPosition} moveKnight={moveKnight} movesField={movesField} /> }
			{status === "win" && <h1 className="win">Вы победили!!!</h1>}
			{status === "lost" && <h1 className="lost">Вы проиграли!!!</h1>}
			{status !== "start" && <Restart restart={restartGame} />}
		</div>
	)
}

function mapStateToProps(state) {
	return {
		status: state.status,
		knightPosition: state.knightPosition,
		movesField: state.movesField,
		moveCount: state.moveCount
	}
}

export default connect(mapStateToProps) (Knight100Game);