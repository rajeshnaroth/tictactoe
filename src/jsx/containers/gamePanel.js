import React from 'react'
import { connect } from 'react-redux'

import Game from '../components/game'

const mapStateToProps = function(state, ownProps) {
	return {board: state.board}
}

const mapDispatchToProps = function(dispatch, ownProps) {
	return {}
}

const GamePanel = connect(mapStateToProps, mapDispatchToProps)(Game)
export default GamePanel