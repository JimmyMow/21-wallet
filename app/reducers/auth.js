import { browserHistory } from 'react-router'
import { auth } from '../api'

const initialState = {
  loading: false,
  authed: false
}
// ------------------------------------
// Constants
// ------------------------------------
export const AUTH_WALLET = 'AUTH_WALLET'
export const AUTH_SUCCESS = 'AUTH_SUCCESS'
export const AUTH_FAILED = 'AUTH_FAILED'

// ------------------------------------
// Actions
// ------------------------------------
export function authWallet() {
  return {
    type: AUTH_WALLET
  }
}

export function authSuccess(data) {
  return {
    type: AUTH_SUCCESS,
    data
  }
}

export function authFailed(error) {
  return {
    type: AUTH_FAILED,
    error
  }
}

export function requestWallet(router) {
  return (dispatch) => {
    dispatch(authWallet())
    auth()
    .then(data => dispatch(authSuccess(data)))
    .catch(error => {
      dispatch(authFailed(error))
      if (router.getCurrentLocation().pathname !== '/signup') {
        router.push('/signup')
      }
    })
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const AUTH_ACTION_HANDLERS = {
  [AUTH_WALLET]: (state) => ({ ...state, fetching: true }),
  [AUTH_SUCCESS]: (state) => ({ fetching: false, authed: true }),
  [AUTH_FAILED]: (state) => ({ fetching: false, auth: false })
}

// ------------------------------------
// Reducer
// ------------------------------------
export default function authReducer(state = initialState, action) {
  const handler = AUTH_ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}