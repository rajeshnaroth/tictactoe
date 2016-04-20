import React from 'react'
import BoardPanel from '../containers/boardPanel'
import ButtonPanel from '../containers/buttonPanel'
import StatusPanel from '../containers/statusPanel'

const Game = function({board}) {

	return  <div className="container game">
		<div className="col col-lg-12  col-lg-12 col-sm-12 text-center">
			<ButtonPanel />
		</div>
		<div className={'col col-lg-4 col-md-4 hidden-xs hidden-sm leftPane player' + board.player}></div>
		<div className="col col-lg-4 col-md-4 col-sm-12">
			<BoardPanel />
			<div className="text-center">
				<StatusPanel />
			</div>
		</div>
		<div className={'col col-lg-4 col-md-4 hidden-xs hidden-sm rightPane player' + board.player}></div>		
	</div>
}

export default Game