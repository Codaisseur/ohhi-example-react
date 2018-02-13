import reducers from './index'

describe('reducers', () => {
  it('has a board reducer', () => {
    expect(Object.keys(reducers).includes('board')).toBe(true)
    expect(Object.keys(reducers).includes('sidebar')).toBe(true)
  })
})
