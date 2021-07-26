const emptyArray = new Array(100);

const initialState = {
	status: "start",
	knightPosition: [0, 0],
	movesField: emptyArray,
	moveCount: 1
}

export default function reducer(state = initialState, action) {
	switch (action.type) {

		case "START_GAME":
			const emptyArray = new Array(100);
			return {
				status: "play",
				knightPosition: [0, 0],
				movesField: emptyArray,
				moveCount: 1
			};

		case "MOVE_KNIGHT":
			let tempArray = [...state.movesField];
			let index = state.knightPosition[0] + state.knightPosition[1] * 10;
			tempArray[index] = state.moveCount;	
			return {
				status: "play",
				knightPosition: action.payload,
				moveCount: state.moveCount + 1,
				movesField: tempArray
			}

		case "WIN":
			return {
				...state,
				status: "win"
			};

		case "LOST":
			return {
				...state,
				status: "lost"
			};

		default:
			return state;
	}
		
}
