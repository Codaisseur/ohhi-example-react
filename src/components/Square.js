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
    makeMove: PropTypes.func.isRequired
  }

  handleClick = () => {
    const { x, y, makeMove } = this.props
    makeMove(y, x)
  }

  render() {
    const { value } = this.props

    return (
      <div
        className={`Square fill-${value || 0}`}
        onClick={this.handleClick}
      />
    )
  }
}

export default connect(null, { makeMove: move })(Square)
