import React from 'react'
import { shallow } from 'enzyme'
import { Board } from './Board.js'

const emptyBoard = [
  [ 0,0,0,0 ],
  [ 0,0,0,0 ],
  [ 0,0,0,0 ],
  [ 0,0,0,0 ]
]

describe('<Board />', () => {
  const board = shallow(<Board board={emptyBoard} />)

  it('renders a div with class Board', () => {
    expect(board).toHaveTagName('div')
    expect(board).toHaveClassName('Board')
  })
})
