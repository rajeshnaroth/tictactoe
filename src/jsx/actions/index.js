// Action types

export const INIT_GAME = 'INIT_GAME'

export const PLAYER_CLICK = 'PLAYER_CLICK'
export const SWITCH_PLAYER = 'SWITCH PLAYER'
export const PLAY_WITH_COMPUTER = 'PLAY_WITH_COMPUTER PLAYER'

export function initGame() {
	return {
		type:INIT_GAME
	}
}

export function switchPlayer(playerId) {
	return {
		type: SWITCH_PLAYER,
		playerId: playerId
	}
}

export function switchToComputerPlay(status) {
	return {
		type: PLAY_WITH_COMPUTER,
		status: status
	}
}

export function playerClick(cellData) {
	return {
		type:PLAYER_CLICK,
		cellData:cellData
	}
}