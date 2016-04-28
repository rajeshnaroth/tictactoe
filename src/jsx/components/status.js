var React = require('react')

var Status = React.createClass({
	render: function() {
		let gameOverClass = (gameOver) => gameOver ? 'visible' : 'hide'
		let playerName = (playerNum, computerPlay) =>  computerPlay? ((playerNum === 2) ? 'Computer\'s' : 'Your') : 'Player ' + playerNum + "'s"
		let winnerName = (winnerNum, computerPlay) =>  computerPlay? ((winnerNum === 2) ? 'Computer' : 'You') : 'Player ' + winnerNum + "'s"
		let statusMessage = (winner, playWithComputer=false) => {
			if (winner === 2 && playWithComputer) return "Computer wins!"
			switch (winner) {
				case 0 : { return '' }
				case -1 : { return "It's a draw" }
				default : { return winnerName(winner, playWithComputer) + ' won' }
			}
		}

		return <div>
			<h3 className={gameOverClass(!this.props.board.gameOver)}> {playerName(this.props.board.player,this.props.board.playWithComputer)} Turn </h3>
			<h3 className={gameOverClass(this.props.board.gameOver)}>{statusMessage(this.props.board.winner, this.props.board.playWithComputer)}</h3>
		</div>
	}
})

export default Status;