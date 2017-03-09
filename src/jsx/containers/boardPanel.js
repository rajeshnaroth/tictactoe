import React from 'react'
import { connect } from 'react-redux'

import { playerClick } from '../actions'
import Board from '../components/Board'

const mapStateToProps = function(state, ownProps) {
	return {board: state.board}
}

const mapDispatchToProps = function(dispatch, ownProps) {
	return {
		cellClick: function(e, cellData) {
			dispatch(playerClick(cellData))
		}
	}
}

const BoardPanel = connect(mapStateToProps, mapDispatchToProps)(Board)
export default BoardPanel