import { wallet } from '../api'

const initialState = {
  fetching: false,
  error: null,
  address: null,
  confirmed: null,
  unconfirmed: null,
  history: []
}

// ------------------------------------
// Constants
// ------------------------------------
const REQUEST_WALLET = 'REQUEST_WALLET'
const WALLET_SUCCESS = 'WALLET_SUCCESS'
const WALLET_FAIL = 'WALLET_FAIL'

// ------------------------------------
// Actions
// ------------------------------------
export function requestWallet() {
  return {
    type: REQUEST_WALLET
  }
}

export function walletSuccess(data) {
  console.log('data: ',data)
  return {
    type: WALLET_SUCCESS,
    data
  }
}

export function walletFail() {
  return {
    type: WALLET_FAIL
  }
}

export const fetchWallet = () => async (dispatch) => {
  dispatch(requestWallet())
  const data = await wallet(['address', 'confirmed', 'unconfirmed', 'history'])
  console.log('data: ', data)
  dispatch(walletSuccess(Object.assign(...data)))
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const WALLET_ACTION_HANDLERS = {
  [REQUEST_WALLET]: (state) => ({
    ...state,
    fetching: true,
    error: null
  }),
  [WALLET_SUCCESS]: (state, action) => ({
    ...state,
    fetching: false,
    error: null,
    address: action.data.address,
    confirmed: action.data.confirmed,
    unconfirmed: action.data.unconfirmed,
    history: action.data.history
  }),
  [WALLET_FAIL]: (state) => ({
    ...state,
    fetching: false,
    error: ':/'
  })
}

// ------------------------------------
// Reducer
// ------------------------------------
export default function walletReducer(state = initialState, action) {
  const handler = WALLET_ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}