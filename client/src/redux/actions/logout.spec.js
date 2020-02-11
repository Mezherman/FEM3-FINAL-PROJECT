import logoutAction from './logout'
import * as t from './actionTypes'

describe('logout actions', () => {
  it('getFilterProducts()', () => {
    const expectedAction = {
      type: t.LOGOUT_TRUE,
      payload: true
    }
    expect(logoutAction()).toEqual(expectedAction)
  })
})