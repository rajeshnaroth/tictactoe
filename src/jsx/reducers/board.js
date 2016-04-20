import { INIT_GAME, PLAYER_CLICK } from '../actions'
import { seeIfCompleted, isADraw } from '../utils'

function createArray(arraySize) {
	return function(initValue) {
		var ret = [];
		var sz = 0;
		while (sz++ < arraySize) ret.push(initValue);
		return ret;
	}
}

var switchPlayer = playerId => playerId === 1 ? 2 : 1;

const BOARD_SIZE = 3
const boardArray = createArray(BOARD_SIZE)
const initValue = 0

const matrix = (state = {}, action={}) => {
	
	switch (action.type) {
		case PLAYER_CLICK: {
			// let returnState =  {gameOver:state.gameOver, player:state.player, winner:0, matrix:state.matrix.map((r) => r)};
			let returnState =  Object.assign({}, state)
			let cellData = Object.assign({}, action.cellData);

			// Activity only happens in unplayed square and not an inactive square
			if (cellData.player === 0 && !cellData.inactive) {
				cellData.player = returnState.player;
				returnState.matrix[cellData.rowIndex][cellData.columnIndex] = cellData;

				// Condition 1 - some one won
				let completed = seeIfCompleted(returnState.matrix);
				if (completed) {
					let {row, column, rowInc, colInc} = completed
					// NO more actions. set it all inactive
					returnState.matrix = returnState.matrix.map(
						row => row.map(
							col => Object.assign({}, col, {inactive:true})
						)
					);
					returnState.matrix[row][column].solved = true
					returnState.matrix[row + rowInc][column + colInc].solved = true
					returnState.matrix[row + rowInc + rowInc][column + colInc + colInc].solved = true
					// reset
					returnState.gameOver = true
					returnState.winner = returnState.player
					returnState.player = 0
					return returnState
				} 
				// Condition 2 - all cells filled. Its a draw
				if (isADraw(returnState.matrix)) {
					returnState.gameOver = true
					returnState.winner = -1 //signal no winner
					returnState.player = 0
					return returnState
				}
				// Condition 3 - Game is still on
				returnState.player = switchPlayer(returnState.player );
			}
			return returnState;
		}
		case INIT_GAME: 
		default: {
			return {
				player:1,
				gameOver:false,
				winner:0,
				matrix: boardArray(0).map((row, rowIndex) => { 
					let inactive = false
					return boardArray(initValue).map((player, columnIndex) => {
						return {rowIndex, columnIndex, player, inactive};
					})
				})
			}
		}
	}
}

export default matrix