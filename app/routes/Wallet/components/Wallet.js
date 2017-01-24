import React, { Component } from 'react'
import { Link } from 'react-router'
import Loading from '../../../components/Loading'
import styles from './Wallet.scss'


export default class Wallet extends Component {
  componentDidMount() {
    const { fetchWallet } = this.props
    fetchWallet()
  }

  render() {
    const { wallet } = this.props
    return (
      <div className={styles.wallet}>
        {
          wallet.fetching ?
            <Loading />
          :
            <div className={styles.data}>
              <p>Address: {wallet.address}</p>
              <p>Confirmed: {wallet.confirmed}</p>
              <p>Unconfirmed: {wallet.unconfirmed}</p>
            </div>
        }
      </div>
    );
  }
}
