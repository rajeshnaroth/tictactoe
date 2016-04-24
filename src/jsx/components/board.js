require('../../scss/tictac.scss');
import React from 'react';
import Cell from './cell';

const Board = React.createClass({
	render: function () {
		return <section>
			<div className={'tBoard playerMode' + this.props.board.player}>{
				this.props.board.matrix.map(
					(row, rowIndex) => {
						return <div
							key={'row-' + rowIndex}
							className="tRow">
							{row.map((col, columnIndex) => {
								return <Cell
									key={'cell' + rowIndex + columnIndex}
									cellData={col}
									cellClick={this.props.cellClick}/>
							})
							}</div>
					}
				)
			}</div>
		</section>
	}
})

export default Board