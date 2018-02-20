import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { move } from '../actions/game'
import './Square.css'

export class Square extends PureComponent {
  static propTypes = {
    value: PropTypes.number.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    makeMove: PropTypes.func.isRequired,
    locked: PropTypes.bool
  }

  handleClick = () => {
    const { x, y, makeMove, locked } = this.props
    if (locked) return

    makeMove(y, x)
  }

  render() {
    const { value, locked } = this.props

    return (
      <div
        className={`Square fill-${value || 0}${locked ? ' locked': ''}`}
        onClick={this.handleClick}
      />
    )
  }
}

const mapStateToProps = ({ locked }, { x, y }) => ({
  locked: locked.filter(l => l[0] === y && l[1] === x).length > 0
})

export default connect(mapStateToProps, { makeMove: move })(Square)
