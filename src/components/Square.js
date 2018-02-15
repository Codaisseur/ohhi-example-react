import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './Square.css'

class Square extends PureComponent {
  static propTypes = {
    value: PropTypes.number.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }

  render() {
    const { value } = this.props

    return (
      <div
        className={`Square fill-${value || 0}`}
      />
    )
  }
}

export default Square
