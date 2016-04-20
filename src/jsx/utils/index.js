import _ from 'lodash'

export function seeIfCompleted(matrix) {

	let solvedLine = function(matrix, params) {
		let {row, column, rowInc, colInc} = params; // from row, col move by row Inc and colInc increment
		return checkLine(
			matrix[row][column],
			matrix[row + rowInc][column + colInc],
			matrix[row + rowInc + rowInc][column + colInc + colInc],
			params
		)
	}

	let checkLine = (a, b, c, lineCode) => {
		return a.player && a.player === b.player && b.player === c.player ? lineCode : false
	}

	if (matrix.length < 2) return false 
	return (
		solvedLine(matrix, {row :0, column: 0, rowInc: 0, colInc: 1}) ||  //first row right
		solvedLine(matrix, {row :0, column: 0, rowInc: 1, colInc: 0}) ||  //first row down
		solvedLine(matrix, {row :0, column: 0, rowInc: 1, colInc: 1}) ||  //across from first cell

		solvedLine(matrix, {row :2, column: 2, rowInc: 0, colInc: -1}) || //last row to left
		solvedLine(matrix, {row :2, column: 2, rowInc: -1, colInc: 0}) || //last row up

		solvedLine(matrix, {row :2, column: 0, rowInc: -1, colInc: 1}) || // across up from last cell

		solvedLine(matrix, {row :0, column: 1, rowInc: 1, colInc: 0}) ||  //middle column down
		solvedLine(matrix, {row :1, column: 0, rowInc: 0, colInc: 1})	  // middle row down
	)
}

export function isADraw(matrix) {
	console.log()
	return (_.flatten(matrix.map(row => row.filter(col => col.player === 0))).length === 0)
}