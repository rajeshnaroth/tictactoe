var React = require('react')

var Status = React.createClass({
	render: function() {
		let gameOverClass = (gameOver) => gameOver ? 'visible' : 'hide'
		let statusMessage = (winner, playWithComputer=false) => {
			if (winner === 2 && playWithComputer) return "Computer wins!"
			switch (winner) {
				case 0 : { return '' }
				case -1 : { return "It's a draw" }
				default : { return 'Player ' + winner + ' wins' }
			}
		}
		return <div>
			<h3 className={gameOverClass(!this.props.board.gameOver)}> Player {this.props.board.player} </h3>
			<h3 className={gameOverClass(this.props.board.gameOver)}>{statusMessage(this.props.board.winner, this.props.board.playWithComputer)}</h3>
		</div>
	}
})

export default Status;