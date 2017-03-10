import React from 'react'

const Status = ({ board }) => { 
	const gameOverClass = (gameOver) => gameOver ? 'visible' : 'hide'
	const playerName = (playerNum, computerPlay) =>  computerPlay? ((playerNum === 2) ? 'Computer\'s' : 'Your') : 'Player ' + playerNum + "'s"
	const winnerName = (winnerNum, computerPlay) =>  computerPlay? ((winnerNum === 2) ? 'Computer wins' : 'You win') : 'Player ' + winnerNum + ' wins'
	const statusMessage = (winner, playWithComputer=false) => {
		if (winner === 2 && playWithComputer) return "Computer wins!"
		switch (winner) {
			case 0 : { return '' }
			case -1 : { return "It's a draw" }
			default : { return winnerName(winner, playWithComputer) }
		}
	}

	return <div>
		<h3 className={gameOverClass(!board.gameOver)}> {playerName(board.player, board.playWithComputer)} Turn </h3>
		<h3 className={gameOverClass(board.gameOver)}>{statusMessage(board.winner, board.playWithComputer)}</h3>
	</div>
}

export default Status;