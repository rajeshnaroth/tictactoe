// Action types

export const INIT_GAME = 'INIT_GAME'

export const USER_PLAY = 'USER_PLAY'
export const COMPUTER_PLAY = 'COMPUTER_PLAY'
export const SWITCH_PLAYER = 'SWITCH PLAYER'
export const TRY_AND_WINDUP = 'SWITCH TRY_AND_WINDUP'
export const PLAY_WITH_COMPUTER = 'PLAY_WITH_COMPUTER'

export function initGame() {
	return {
		type:INIT_GAME
	}
}

export function userPlay(cellData) {
	return {
		type:USER_PLAY,
		cellData:cellData
	}
}

export function computerPlay() {
	return {
		type:COMPUTER_PLAY
	}
}

export function tryToWindUp() {
	return {
		type:TRY_AND_WINDUP
	}
}

export function switchPlayer() {
	return {
		type: SWITCH_PLAYER
	}
}

export function switchToComputerPlay(status) {
	return {
		type: PLAY_WITH_COMPUTER,
		status: status
	}
}

export function startGame() {
	return (dispatch, getState) => {
		Promise.all([
			dispatch(initGame())
		]).then(() => {
			if (getState().board.playWithComputer && getState().board.player === 2) {
				Promise.all([
					dispatch(computerPlay()),
					dispatch(switchPlayer())
				])
			}
		})
	}
}

export function playerClick(cellData) {
	return (dispatch, getState) => {
		Promise.all([
			dispatch(userPlay(cellData)),
			dispatch(tryToWindUp())
		]).then(() => {
			if (!getState().board.gameOver && getState().board.playWithComputer) {
				Promise.all([
					dispatch(switchPlayer()),
					dispatch(computerPlay()),
					dispatch(tryToWindUp())
				]).then(() => {
					if (!getState().board.gameOver) dispatch(switchPlayer())
				})
			} else {
				if (!getState().board.gameOver) {
					dispatch(switchPlayer())
				}
			}
		});
	}
}
