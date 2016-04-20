import React from 'react'

const Status = function({board}) {
	let gameOverClass = (gameOver) => gameOver ? 'visible' : 'hide'
	return <div>
			<h3 className={gameOverClass(!board.gameOver)}> Player {board.player} </h3>
			<h3 className={gameOverClass(board.gameOver)}>Player {board.winner} Wins</h3>
		</div>
}

export default Status