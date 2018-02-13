import store from './store.js'

describe('Redux Store', () => {
  it('has an empty initial state', () => {
    expect(store.getState()).toEqual({})
  })
})
