import React, { Component } from 'react'
import { Link } from 'react-router'
import styles from './Wallet.scss'


export default class Wallet extends Component {
  componentDidMount() {
    console.log('props: ', this.props)
    const { fetchWallet } = this.props
    fetchWallet()
  }

  render() {
    const { wallet } = this.props
    console.log('wallet: ', wallet)
    return (
      <div className={styles.wallet}>
        {
          wallet.fetching ?
            'Loading...'
          :
            'Loaded!'
        }
      </div>
    );
  }
}
