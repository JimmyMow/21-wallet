import React, { Component } from 'react'
import { Link } from 'react-router'
import FontAwesome from 'react-fontawesome'
import Loading from '../../../components/Loading'
import styles from './Wallet.scss'


export default class Wallet extends Component {
  componentDidMount() {
    const { fetchWallet } = this.props
    fetchWallet()
  }

  render() {
    const {
      wallet: {
        address,
        confirmed,
        unconfirmed,
        history,
        fetching,
        error
      }
    } = this.props
    return (
      <div className={styles.wallet}>
        {
          fetching ?
            <Loading />
          :
            <div className={styles.content}>
              <section className={styles.header}>
                <div className={styles.icon}>
                  <span className={styles.helper} />
                  <FontAwesome name='btc' />
                </div>
                <h2 className={styles.confirmedbtc}>
                  {confirmed}
                  <span className={styles.currency}>
                    btc
                  </span>
                </h2>
              </section>
            </div>
        }
      </div>
    );
  }
}
