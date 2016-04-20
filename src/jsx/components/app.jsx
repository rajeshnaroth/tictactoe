import React from 'react'
import GamePanel from '../containers/gamePanel'

const App = React.createClass({
	render: function() {
		return <div>
			<h1>Tic tac toe</h1>
			<GamePanel />
		</div>
	}
})

export default App;