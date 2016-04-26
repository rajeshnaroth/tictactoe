import _ from 'lodash'

export function isSolved(matrix) {

	const checkLine = (a, b, c, params) => {
		return a.player && a.player === b.player && b.player === c.player ? params : false
	}

	const solvedLine = function(matrix, params) {
		let {row, column, rowInc, colInc} = params; // from row, col move by row Inc and colInc increment
		return checkLine(
			matrix[row][column],
			matrix[row + rowInc][column + colInc],
			matrix[row + rowInc + rowInc][column + colInc + colInc],
			params
		)
	}

	if (matrix.length < 2) return false 
	return (
		solvedLine(matrix, {row :1, column: 0, rowInc: 0, colInc: 1}) ||	  // middle to right
		solvedLine(matrix, {row :0, column: 0, rowInc: 0, colInc: 1}) ||  //first row right
		solvedLine(matrix, {row :0, column: 0, rowInc: 1, colInc: 0}) ||  //first row down
		solvedLine(matrix, {row :0, column: 0, rowInc: 1, colInc: 1}) ||  //across from first cell

		solvedLine(matrix, {row :2, column: 2, rowInc: 0, colInc: -1}) || //last row to left
		solvedLine(matrix, {row :2, column: 2, rowInc: -1, colInc: 0}) || //last row up

		solvedLine(matrix, {row :2, column: 0, rowInc: -1, colInc: 1}) || // across up from last cell

		solvedLine(matrix, {row :0, column: 1, rowInc: 1, colInc: 0})   //middle column down
	)
}

function playingInThisCellSolves(cell, matrix, player) {
	var testMatrix = _.cloneDeep(matrix) // copy
	if (cell.player < 1) {
		testMatrix[cell.rowIndex][cell.columnIndex].player = player;
		return !!isSolved(testMatrix)
	} else {
		return false;
	}
}

function canPlayerSolveInNextMove(matrix, player) {
	var completedMoves = _.flatten(matrix.map(row => {
		return row.filter(cell => !!playingInThisCellSolves(cell, matrix, player))
	}));
	return (completedMoves.length > 0) ? {row:completedMoves[0].rowIndex, col:completedMoves[0].columnIndex} : false;
}

// Math.random calls
export function randomPlay(matrix, player, opponent) {
	// Apply a common strategy to increase the odds..

	var nextMove = canPlayerSolveInNextMove(matrix, player) || canPlayerSolveInNextMove(matrix, opponent);
	if (nextMove) return nextMove;
	// Some dumb moves.
	if (matrix[1][1].player < 1) return {row:1, col:1} // first preference, the center block
	// next the corners.
	if (matrix[0][0].player < 1) return {row:0, col:0}
	if (matrix[0][2].player < 1) return {row:0, col:2}
	if (matrix[2][0].player < 1) return {row:2, col:0}
	if (matrix[2][2].player < 1) return {row:2, col:2}


	if (!isSolved(matrix)) {
		do {
			var row = Math.floor(Math.random() * 3); // row and col are hoisted
			var col = Math.floor(Math.random() * 3);
		} while(matrix[row][col].player > 0)
		return {row, col}
	}
}


export function isADraw(matrix) {
	return (_.flatten(matrix.map(row => row.filter(col => col.player === 0))).length === 0)
}