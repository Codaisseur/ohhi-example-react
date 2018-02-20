// src/containers/Board.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { duplicateCols, duplicateRows } from '../lib/game'
import Square from '../components/Square'
import './Board.css'

export class Board extends PureComponent {
  static propTypes = {
    board: PropTypes.arrayOf(
      PropTypes.arrayOf(PropTypes.number)
    ).isRequired,
    dupeRows: PropTypes.arrayOf(PropTypes.number),
    dupeCols: PropTypes.arrayOf(PropTypes.number),
  }

  renderRow = (row, index) => {
    return (
      <div className="row" key={index}>
        {row.map(this.renderSquare(index))}
      </div>
    )
  }

  renderSquare = rowIndex => (value, index) => {
    const { dupeCols, dupeRows } = this.props

    const dupe = dupeCols.includes(index) || dupeRows.includes(rowIndex)

    return (
      <Square
        key={index}
        value={value}
        dupe={dupe}
        x={index}
        y={rowIndex}
      />
    )
  }

  render() {
    return (
      <div className="Board">
        {this.props.board.map(this.renderRow)}
      </div>
    )
  }
}

const mapStateToProps = ({ board }) => ({
  board,
  dupeRows: duplicateRows(board),
  dupeCols: duplicateCols(board)
})

export default connect(mapStateToProps)(Board)
