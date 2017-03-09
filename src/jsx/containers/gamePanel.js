import React from 'react'
import { connect } from 'react-redux'
import { startGame, turnOnComputerPlay } from '../actions'

import Game from '../components/game'

const mapStateToProps = function(state, ownProps) {
	return {board: state.board}
}

const mapDispatchToProps = function(dispatch, ownProps) {
	return {
		initGame: function(e) {
			dispatch(startGame())
		},
		setComputerPlay: function(e, checkboxStatus) {
			dispatch(turnOnComputerPlay(checkboxStatus))
		}
	}
}

const GamePanel = connect(mapStateToProps, mapDispatchToProps)(Game)
export default GamePanel