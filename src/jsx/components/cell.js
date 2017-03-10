import React from 'react'

const Cell = ({cellData, cellClick}) => {
	const playerClass = (playerNumber) => playerNumber === 1 ? 'p1' : (playerNumber === 2 ? 'p2' : '')
	const playedClass = (playerNumber) => playerNumber === 0 ? '' : 'played'
	const doneClass = (inactive) => inactive ? 'inactive' : ''
	const solvedClass = (solved) => solved ? 'solved' : ''

	return <div onClick={(e) => { cellClick(e, cellData) }}
				className={"tCell "
						+ playerClass(cellData.player) + ' '
						+ playedClass(cellData.player) + ' '
						+ solvedClass(cellData.solved) + ' '
						+ doneClass(cellData.inactive)
					}>
			</div>
}

export default Cell