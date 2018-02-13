import store from './store.js'

describe('Redux Store', () => {
  it('has an initial state', () => {
    expect(store.getState()).toEqual({
      board: [],
      locked: [],
      sidebar: { open: true }
    })
  })
})
