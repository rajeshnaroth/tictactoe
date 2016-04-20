import React from 'react'
import { connect } from 'react-redux'

import { initGame } from '../actions'
import BoardButtons from '../components/BoardButtons'

const mapStateToProps = function(state, ownProps) {
	return {gameOver: state.board.gameOver}
}

const mapDispatchToProps = function(dispatch, ownProps) {
	return {
		buttonClick: function(e) {
			dispatch(initGame())
		}
	}
}

const ButtonPanel = connect(mapStateToProps, mapDispatchToProps)(BoardButtons)
export default ButtonPanel