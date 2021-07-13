import React from 'react';

export default function Start ({ startGame }) {
	return (
		<div>
			<div>Добро пожаловать в игру 100 ходов конём</div>
			<div>Ваша задача - делая ходы конём пройти все 100 клеток</div>
			<button className="start-button" onClick={startGame}>Старт</button>
		</div>
		)
}