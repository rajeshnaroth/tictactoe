import React from 'react'
import BoardPanel from '../containers/boardPanel'
import ButtonPanel from '../containers/buttonPanel'
import StatusPanel from '../containers/statusPanel'

const Game = React.createClass({
	render: function() {
		return <div className="container game">
			<div
				className={'col col-lg-4 hidden-md hidden-xs hidden-sm leftPane player' + this.props.board.player}></div>
			<div className="col col-lg-4 col-md-4 col-sm-12">
				<BoardPanel />

				<div className="text-center">
					<StatusPanel />
				</div>
			</div>
			<div
				className={'col col-lg-4 hidden-md hidden-xs hidden-sm rightPane player' + this.props.board.player}></div>
			<div className="col col-lg-12  col-lg-12 col-sm-12 text-center">
				<ButtonPanel />
			</div>
		</div>
	}
})

export default Game