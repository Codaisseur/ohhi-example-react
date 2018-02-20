import { CREATE_GAME } from './types'
import { createGame } from './game'

describe('createGame(size)', () => {
  const action = createGame(4)

  it('has the right type', () => {
    expect(action.type).toEqual(CREATE_GAME)
  })

  describe('its payload', () => {
    it('has a board of the right size', () => {
      expect(action.payload.board.length).toEqual(4)
    })

    it('has the locked squares', () => {
      expect(action.payload.locked.length).toEqual(4)
    })
  })
})

