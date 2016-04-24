import React from 'react'

const BoardButtons = React.createClass({
	render: function () {
		return <p>
			<button className="btn btn-lg btn-info" onClick={this.props.buttonClick} >
				<span className="glyphicon glyphicon-repeat"> </span> {this.props.gameOver ? 'Play Again' : 'Reset Game'}
			</button>
			<span className="checkbox">
				<label>
					<input type="checkbox"
						   checked={this.props.playWithComputer}
						   onClick={(e) => {this.props.checkBoxClick(e, e.target.checked)}}
						   value="yes"/>
					Play with dumb computer</label>
			</span>
		</p>
	}
})
export default BoardButtons;