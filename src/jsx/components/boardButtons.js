import React from 'react'

const BoardButtons = React.createClass({
	render: function () {
		return <p>
			<button className="btn btn-lg btn-info" onClick={this.props.buttonClick} >
				<span className="glyphicon glyphicon-repeat"> </span> {this.props.gameOver ? 'Play Again' : 'Reset Game'}
			</button>
		</p>
	}
})
export default BoardButtons;