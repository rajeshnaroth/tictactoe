import React from 'react'

const Cell = React.createClass({
	render: function() {
		const playerClass = (playerNumber) => playerNumber === 1 ? 'p1' : (playerNumber === 2 ? 'p2' : '')
		const playedClass = (playerNumber) => playerNumber === 0 ? '' : 'played'
		const doneClass = (inactive) => inactive ? 'inactive' : ''
		const solvedClass = (solved) => solved ? 'solved' : ''

		return <div onClick={(e) => { this.props.cellClick(e, this.props.cellData) }}
					className={"tCell "
							+ playerClass(this.props.cellData.player) + ' '
							+ playedClass(this.props.cellData.player) + ' '
							+ solvedClass(this.props.cellData.solved) + ' '
							+ doneClass(this.props.cellData.inactive)
						}>
				</div>
	}
})


export default Cell