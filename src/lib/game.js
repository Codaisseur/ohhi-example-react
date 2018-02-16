// src/lib/game.js

// Returns array with indices of the wrongly placed values.
//
// Example:
//
// threeOrMoreInARow([0,1,1,1,2,1])
// => [1,2,3]
//
export const threeOrMoreInARow = (rowOrCol) => {
  const counts = rowOrCol
    .join('')
    .match(/([1-2]|0)\1*/g) || []

  const matches = []
    .concat
    .apply([], counts.map((m, i) =>
      new Array(m.length).fill(m.match(/0/) ? null : m.length)
    ))
    .map((l, i) => (l > 2 ? i : null))
    .filter((l) => (l !== null))

  return matches
}

// Returns the number of occurrences of `value` in `rowOrCol`.
//
// Example:
//
// numberOfValues([0,1,1,1,2,1], 1)
// => 4
//
export const numberOfValues = (rowOrCol, value) => {
  return rowOrCol
    .filter(v => v === value)
    .length
}

// Returns true if rowOrCol1 and rowOrCol2 are fully filled and the same.
//
// Example:
//
// areIdentical([1,2,1,2], [1,2,1,2])
// => true
//
// areIdentical([1,1,2,2], [1,2,1,2])
// => false
//
// areIdentical([1,2,0,2], [1,2,0,2])
// => false (not fully filled in, has 0s)
export const areIdentical = (rowOrCol1, rowOrCol2) => {
  if (numberOfValues(rowOrCol1, 0) > 0) return false
  if (numberOfValues(rowOrCol2, 0) > 0) return false

  return rowOrCol1
    .filter((v,i) => v === rowOrCol2[i])
    .length === rowOrCol1.length
}

export const isBoardFull = (board) => {
  return board
    .reduce((sum, row) => sum + numberOfValues(row, 0), 0) === 0
}
