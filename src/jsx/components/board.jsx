require('../../scss/tictac.scss');
import React from 'react';
import Cell from './cell';

const Board = function({board, cellClick, buttonClick}) {
	return <section>
		<div className={'tBoard playerMode' + board.player}>{
			board.matrix.map(
				(row, rowIndex) => {
					return <div 
						key={'row-' + rowIndex} 
						className="tRow">
						{row.map((col, columnIndex) => {
							return <Cell 
										key={'cell' + rowIndex + columnIndex} 
										cellData={col} 
										cellClick={cellClick}/>
						} )
					}</div>
				}
			)
		}</div>
	</section>
}


export default Board