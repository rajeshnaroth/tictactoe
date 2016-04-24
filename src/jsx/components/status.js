var React = require('react')

var Status = React.createClass({
	render: function() {
		let gameOverClass = (gameOver) => gameOver ? 'visible' : 'hide'
		let statusMessage = (winner) => {
			switch (winner) {
				case 0 : { return '' }
				case -1 : { return "It's a draw" }
				default : { return 'Player ' + winner + ' wins' }
			}
		}
		return <div>
			<h3 className={gameOverClass(!this.props.gameOver)}> Player {this.props.player} </h3>
			<h3 className={gameOverClass(this.props.gameOver)}>{statusMessage(this.props.winner)}</h3>
		</div>
	}
})

export default Status;