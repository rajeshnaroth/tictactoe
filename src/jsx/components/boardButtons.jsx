import React from 'react'
const BoardButtons = function({gameOver, buttonClick}) {
	return <p>
		<button className="btn btn-lg btn-info" onClick={buttonClick} >
			<span className="glyphicon glyphicon-repeat"> </span> {gameOver ? 'Play Again' : 'Reset Game'}
		</button>
		</p>
}
export default BoardButtons;