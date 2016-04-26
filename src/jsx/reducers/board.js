import { INIT_GAME, PLAYER_CLICK, PLAY_WITH_COMPUTER } from '../actions'
import { isSolved, randomPlay, isADraw } from '../utils'

function createArray(arraySize) {
	return function(initValue) {
		var ret = [];
		var sz = 0;
		while (sz++ < arraySize) ret.push(initValue);
		return ret;
	}
}


function windupGame(returnState) {
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
}

var switchPlayer = playerId => playerId === 1 ? 2 : 1;

const BOARD_SIZE = 3
const boardArray = createArray(BOARD_SIZE)
const initValue = 0

const game = (state = {board:{playWithComputer:false}}, action={}) => {

	function tryAndWindupGame(returnState) {
		let completed = isSolved(returnState.matrix);
		if (completed) {
			let {row, column, rowInc, colInc} = completed
			// NO more actions. set it all inactive
			returnState.matrix = returnState.matrix.map(
					row => row.map(
						col => Object.assign({}, col, {inactive: true})
				)
			);
			returnState.matrix[row][column].solved = true
			returnState.matrix[row + rowInc][column + colInc].solved = true
			returnState.matrix[row + rowInc + rowInc][column + colInc + colInc].solved = true
			// reset
			returnState.gameOver = true
			returnState.winner = returnState.player
			returnState.player = 0
		} else {
			if (isADraw(returnState.matrix)) {
				returnState.gameOver = true
				returnState.winner = -1;
				returnState.player = 0
			}
		}
		return returnState
	}

	switch (action.type) {
		case PLAY_WITH_COMPUTER: {
			return  Object.assign({}, state, { playWithComputer: action.status})
		}
		case PLAYER_CLICK: {
			// let returnState =  {gameOver:state.gameOver, player:state.player, winner:0, matrix:state.matrix.map((r) => r)};
			let returnState =  Object.assign({}, state)
			let cellData = Object.assign({}, action.cellData);
			var newStatus;
			// Activity only happens in unplayed square and not an inactive square
			if (cellData.player === 0 && !cellData.inactive) {
				cellData.player = returnState.player;
				returnState.matrix[cellData.rowIndex][cellData.columnIndex] = cellData;

				// Condition 1 - some one won or draw
				newStatus = tryAndWindupGame(returnState)
				if(returnState.gameOver) return newStatus;

				// Condition 2 - Game is still on
				if (returnState.playWithComputer) {
					returnState.player = switchPlayer(returnState.player)
					let {row, col} = randomPlay(returnState.matrix, returnState.player, switchPlayer(returnState.player))
					returnState.matrix[row][col].player = returnState.player

					newStatus = tryAndWindupGame(returnState)
					if(returnState.gameOver) return newStatus;

					returnState.player = switchPlayer(returnState.player );
				} else {
					returnState.player = switchPlayer(returnState.player );
				}
			}
			return returnState;
		}
		case INIT_GAME: 
		default: {
			let initData = {
				player:Math.floor(Math.random() * 2) + 1,
				gameOver:false,
				playWithComputer:state.playWithComputer,
				winner:0,
				matrix: boardArray(0).map((row, rowIndex) => {
					let inactive = false
					return boardArray(initValue).map((player, columnIndex) => {
						return {rowIndex, columnIndex, player, inactive};
					})
				})
			}
			if (initData.playWithComputer && initData.player === 2) {
				let {row, col} = randomPlay(initData.matrix, 2, 1)
				initData.matrix[row][col].player = 2
				initData.player = 1
			}
			return initData
		}
	}
}

export default game