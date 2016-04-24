import React from 'react'
import { connect } from 'react-redux'

import { initGame, switchToComputerPlay } from '../actions'
import BoardButtons from '../components/BoardButtons'

const mapStateToProps = function(state, ownProps) {
	return {gameOver: state.board.gameOver, playWithComputer:state.board.playWithComputer}
}

const mapDispatchToProps = function(dispatch, ownProps) {
	return {
		buttonClick: function(e) {
			dispatch(initGame())
		},
		checkBoxClick: function(e, status) {
			dispatch(switchToComputerPlay(status))
		}
	}
}

const ButtonPanel = connect(mapStateToProps, mapDispatchToProps)(BoardButtons)
export default ButtonPanel