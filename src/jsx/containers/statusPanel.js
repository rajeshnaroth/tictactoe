import React from 'react'
import { connect } from 'react-redux'

import Status from '../components/status'

const mapStateToProps = function(state, ownProps) {
	return {board: state.board}
}

const mapDispatchToProps = function(dispatch, ownProps) {
	return {}
}

const StatusPanel = connect(mapStateToProps, mapDispatchToProps)(Status)
export default StatusPanel