import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchWallet } from '../../../reducers/wallet'
import Wallet from '../components/Wallet'

const mapDispatchToProps = {
  fetchWallet
}

const mapStateToProps = (state) => ({
  wallet: state.wallet
})

export default connect(mapStateToProps, mapDispatchToProps)(Wallet)
