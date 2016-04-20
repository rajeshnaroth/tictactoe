import React from 'react'

const Status = function({board}) {
	let gameOverClass = (gameOver) => gameOver ? 'visible' : 'hide'
	function statusMessage(winner) {
		switch (winner) {
			case 0 : { return '' } 
			case -1 : { return "It's a draw" }
			default : { return 'Player ' + winner + ' wins' }
		}
	}

	return <div>
			<h3 className={gameOverClass(!board.gameOver)}> Player {board.player} </h3>
			<h3 className={gameOverClass(board.gameOver)}>{statusMessage(board.winner)}</h3>
		</div>
}

export default Status