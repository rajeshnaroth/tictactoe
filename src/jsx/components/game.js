import React from 'react'
import BoardPanel from '../containers/boardPanel'
import StatusPanel from '../containers/statusPanel'

const Game = React.createClass({
	componentWillMount: function() {
		this.props.initGame()
	},
	render: function() {
        console.log('playWithComputer', this.props.board.playWithComputer)
		return <div className="container game">
	       <div className="col col-lg-12  col-lg-12 col-sm-12 text-center">
		       <p><span className="checkbox">	
	                <label className="radio-inline">
                        <input type="radio" name="cplay" defaultChecked="{this.props.board.playWithComputer}"
		                    onClick={(e) => {this.props.setComputerPlay(e, true)}}
			                value="yes"/>
		                Play with computer</label>
	                <label className="radio-inline">
                        <input type="radio" name="cplay"
		                    onClick={(e) => {this.props.setComputerPlay(e, false)}}
			                value="no"/>
		                Two player</label>
		       </span></p>
               <StatusPanel />
	       </div>
			<div
				className={'col col-lg-4 hidden-md hidden-xs hidden-sm leftPane player' + this.props.board.player}></div>
			<div className="col col-lg-4 col-md-4 col-sm-12">
				<BoardPanel />

				<div className="text-center">
					
				</div>
			</div>
			<div
				className={'col col-lg-4 hidden-md hidden-xs hidden-sm rightPane player' + this.props.board.player}></div>
			<div className="col col-lg-12  col-lg-12 col-sm-12 text-center">
        			<button className="btn btn-lg btn-info" onClick={this.props.initGame} >
        				<span className="glyphicon glyphicon-repeat"> </span> {this.props.gameOver ? 'Play Again' : 'Restart'}
        			</button>
			</div>
		</div>
	}
})

export default Game