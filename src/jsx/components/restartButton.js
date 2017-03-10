import React from 'react'
const RestartButton = ({initGame, gameOver}) => (
    <button className="btn btn-lg btn-info" onClick={initGame} >
        <span className="glyphicon glyphicon-repeat"> </span> {gameOver ? 'Play Again' : 'Restart'}
    </button>
)

export default RestartButton