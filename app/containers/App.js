import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { requestWallet } from '../reducers/auth'
import App from '../components/App'
import FontAwesome from 'font-awesome/css/font-awesome.css'

const mapDispatchToProps = {
  requestWallet
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps, mapDispatchToProps)(App)