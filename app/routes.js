import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import HomePage from './containers/HomePage'
import SignupContainer from './routes/Signup/containers/SignupContainer'
import WalletContainer from './routes/Wallet/containers/WalletContainer'
import CounterPage from './containers/CounterPage'

export default (
  <Route path="/" component={App} >
    <IndexRoute component={HomePage} />
    <Route path="/signup" component={SignupContainer} />
    <Route path="/wallet" component={WalletContainer} />
    <Route path="/counter" component={CounterPage} />
  </Route>
);
