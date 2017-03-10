import { flatten, cloneDeep, concat, head, shuffle } from 'lodash/fp'

export const switchPlayer = playerId => playerId === 1 ? 2 : 1;

export function isSolved(matrix) {

    // a, b, c are cells. True if all the cells have the same user
    const checkLine = (a, b, c, params) => {
        return a.player && a.player === b.player && b.player === c.player ? params : false
    }

    // row, col is start point, rowInc and colInc tells you the direction
    const solvedLine = function(matrix, params) {
        const { row, column, rowInc, colInc } = params; // from row, col move by row Inc and colInc increment
        return checkLine(
            matrix[row][column],
            matrix[row + rowInc][column + colInc],
            matrix[row + rowInc + rowInc][column + colInc + colInc],
            params
        )
    }

    if (matrix.length < 2) return false 
    return (
        solvedLine(matrix, { row :1, column: 0, rowInc: 0, colInc: 1 }) ||  // middle to right
        solvedLine(matrix, { row :0, column: 0, rowInc: 0, colInc: 1 }) ||  //first row right
        solvedLine(matrix, { row :0, column: 0, rowInc: 1, colInc: 0 }) ||  //first row down
        solvedLine(matrix, { row :0, column: 0, rowInc: 1, colInc: 1 }) ||  //across from first cell

        solvedLine(matrix, { row :2, column: 2, rowInc: 0, colInc: -1 }) || //last row to left
        solvedLine(matrix, { row :2, column: 2, rowInc: -1, colInc: 0 }) || //last row up

        solvedLine(matrix, { row :2, column: 0, rowInc: -1, colInc: 1 }) || // across up from last cell

        solvedLine(matrix, { row :0, column: 1, rowInc: 1, colInc: 0 })     //middle column down
    )
}


// Contains Math.random calls
// ComputerMove has simple strategies. No complicated algorithms. Thus it is beatable and user can still win.
// ... at times. :-)
export function computerMove(matrix, player, opponent) {

    const playingInThisCellSolves = (cell, matrix, player) => {
        const testMatrix = cloneDeep(matrix) // copy
        if (cell.player < 1) {
            testMatrix[cell.rowIndex][cell.columnIndex].player = player;
            return !!isSolved(testMatrix)
        } else {
            return false;
        }
    }

    const canPlayerSolveInNextMove = (matrix, player) => {
        const completedMoves = flatten(matrix.map(
            row => row.filter(cell => !!playingInThisCellSolves(cell, matrix, player))
        ));
        return head(completedMoves)
    }

    const playedCellList = (matrix) => flatten(matrix.map(row => row.filter(cell => cell.player > 0)))

    // can you finish the game? If not can you block the opponent from completing?
    const nextMove = canPlayerSolveInNextMove(matrix, player) || canPlayerSolveInNextMove(matrix, opponent)
    if (nextMove) return { 
        row:nextMove.rowIndex, 
        col:nextMove.columnIndex 
    }

        
    // Some strategic moves.
    const cornerCells = [ { row:0, col:0 }, { row:0, col:2 }, { row:2, col:0 }, { row:2, col:2 } ]
    const edgeCells   = [ { row:0, col:1 }, { row:1, col:0 }, { row:1, col:2 }, { row:2, col:1 } ]
    const centerCells = [ { row:1,col:1 } ]

    const playedCells = playedCellList(matrix)
    const usersFirstMoveCell = head(playedCells)
    let candidatesForNextMove = []
    if (playedCells.length === 1) {
        // First move matters. 
        //If user played corner, play side and vice versa.
        if ((usersFirstMoveCell.rowIndex + usersFirstMoveCell.columnIndex) % 2 == 1) {
            candidatesForNextMove = cornerCells;
        } else {
            candidatesForNextMove = edgeCells;
        }
    } else if (playedCells.length === 3) {
        // Second move. Try and complete a row or col
        const firstPlayCell = head(playedCells.filter((cell) => cell.player && cell.player === 2))
        let rowCells = [0, 1, 2].map(index => ({row:index, col:firstPlayCell.columnIndex}))
        let colCells = [0, 1, 2].map(index => ({row:firstPlayCell.rowIndex, col:index}))
        if (rowCells.reduce((acc, cell) => (acc += cell.player ? 0 : 1), 0) < 2) {
            rowCells = []
        }
        if (colCells.reduce((acc, cell) => (acc += cell.player ? 0 : 1), 0) < 2) {
            colCells = []
        }
        candidatesForNextMove = concat(rowCells, colCells)
    } else {
        // A random move to any f the possible cells.
        candidatesForNextMove = concat(cornerCells, edgeCells, centerCells)
    }
    
    // To remove pedicatbility, we do a shuffle. (Thanks lodash)
    const emptyCells = shuffle(candidatesForNextMove).filter(({row,col}) => matrix[row][col].player < 1) // filter out available cells

    if (head(emptyCells)) return head(emptyCells) // There has to be at least one cell you can move to.
    throw Error("Unable to make computer's next move")
}


export function isADraw(matrix) {
    return (flatten(matrix.map(row => row.filter(col => col.player === 0))).length === 0)
}

export function thunk({ dispatch, getState }) {
    return function(next) {
        return function(action) {
            if (typeof action === 'function') {
                return action(dispatch, getState);
            }
            return next(action);
        }
    }
}
