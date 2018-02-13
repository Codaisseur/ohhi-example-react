import reducers from './index'

describe('reducers', () => {
  it('has a board reducer', () => {
    expect(Object.keys(reducers)).toEqual(['board'])
  })
})
