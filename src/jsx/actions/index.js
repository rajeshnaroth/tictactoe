// Action types

export const INIT_GAME = 'INIT_GAME'
export const START_GAME = 'START_GAME'
export const END_GAME = 'END_GAME'

export const INIT_PLAYER = 'INIT_PLAYER'
export const PLAYER_CLICK = 'PLAYER_CLICK'
export const SWITCH_PLAYER = 'SWITCH PLAYER'

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

export function playerClick(cellData) {
	return {
		type:PLAYER_CLICK,
		cellData:cellData
	}
}