import { INIT_GAME, TRY_AND_WINDUP, USER_PLAY, TURN_ON_COMPUTER_PLAY, COMPUTER_PLAY, SWITCH_PLAYER } from '../actions'
import { switchPlayer, isSolved, isADraw, computerMove} from '../utils'
import _ from 'lodash'

function createArray(arraySize) {
	return function(initValue) {
		var ret = [];
		var sz = 0;
		while (sz++ < arraySize) ret.push(initValue);
		return ret;
	}
}

const BOARD_SIZE = 3
const boardArray = createArray(BOARD_SIZE)
const initValue = 0

//Note the use of _.random().
//game cannot be a pure reducer as it requires to randomize first play
const game = (state = {board:{playWithComputer:false}}, action={}) => {

	switch (action.type) {

		case TURN_ON_COMPUTER_PLAY: {
			return  Object.assign({}, state, { playWithComputer: action.status})
		}

		case USER_PLAY: {
			let returnState =  Object.assign({}, state)
			let cellData = Object.assign({}, action.cellData)
			if (cellData.player === 0 && !cellData.inactive) {
				cellData.player = returnState.player;
				returnState.matrix[cellData.rowIndex][cellData.columnIndex] = cellData;
			}
			return returnState;
		}

		case COMPUTER_PLAY: {
			let returnState =  Object.assign({}, state)
			let {row, col} = computerMove(returnState.matrix, returnState.player, switchPlayer(returnState.player))
			returnState.matrix[row][col].player = returnState.player
			return returnState;
		}

		case TRY_AND_WINDUP: {
			let returnState =  Object.assign({}, state)
			let completed = isSolved(returnState.matrix);
			if (completed) {
				let {row, column, rowInc, colInc} = completed
				// No more actions. set it all inactive
				returnState.matrix = returnState.matrix.map(
					(mrow, i) => mrow.map(
						(mcol, j) => Object.assign({}, mcol, {
							inactive: true,
							solved:((i === row && j === column)
							|| (i === row + rowInc && j === column + colInc )
							|| (i === row + rowInc + rowInc && j === column + colInc + colInc)) ? true : false
						})
					)
				);
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

		case SWITCH_PLAYER: {
			return  Object.assign({}, state, { player: switchPlayer(state.player)})
		}

		case INIT_GAME:
		default: {
			return {
				player:_.random(1, 2),
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
		}
	}
}

export default game