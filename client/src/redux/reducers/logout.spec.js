import logout, { initialState } from './logout'
import * as t from '../actions/actionTypes'

describe('logout reducer', () => {
  it('LOGOUT_TRUE', () => {
    const action = {
      type: t.LOGOUT_TRUE,
      payload: false
    }
    expect(logout(initialState, action)).toEqual({
      logout: action.payload
    })
  })
})