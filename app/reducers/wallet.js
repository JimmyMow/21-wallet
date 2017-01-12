const initialState = {
  address: null,
  confirmed: null,
  unconfirmed: null
}

// ------------------------------------
// Constants
// ------------------------------------

// ------------------------------------
// Actions
// ------------------------------------

// ------------------------------------
// Action Handlers
// ------------------------------------
const WALLET_ACTION_HANDLERS = {}

// ------------------------------------
// Reducer
// ------------------------------------
export default function walletReducer(state = initialState, action) {
  const handler = WALLET_ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}