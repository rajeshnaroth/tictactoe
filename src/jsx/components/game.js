import React from 'react'
import BoardPanel from '../containers/boardPanel'
import StatusPanel from '../containers/statusPanel'
import PlayerSelection from '../components/playerSelection.js'
import RestartButton from '../components/restartButton.js'

const Game = React.createClass({
    componentWillMount: function() {
        this.props.initGame()
    },
    render: function() {
        return <div className="container game">
            <div className="col col-lg-12  col-lg-12 col-sm-12 text-center">
                <PlayerSelection playWithComputer={this.props.board.playWithComputer} setComputerPlay={this.props.setComputerPlay}/>
                <StatusPanel />
            </div>
            <div className={'col col-lg-4 hidden-md hidden-xs hidden-sm leftPane player' + this.props.board.player}></div>
            <div className="col col-lg-4 col-md-4 col-sm-12">
                <BoardPanel />
            </div>
            <div className={'col col-lg-4 hidden-md hidden-xs hidden-sm rightPane player' + this.props.board.player}></div>
            <div className="col col-lg-12  col-lg-12 col-sm-12 text-center">
                <RestartButton initGame={this.props.initGame} gameOver={this.props.gameOver} />
            </div>
        </div>
    }
})

export default Game