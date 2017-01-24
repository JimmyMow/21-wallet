import React, { Component } from 'react'
import { Link } from 'react-router'
import styles from './App.scss'
import Nav from './Nav'
import { requestWallet } from '../reducers/auth'

export default class App extends Component {
  componentWillMount() {
    const { requestWallet, router } = this.props
    requestWallet(router)
    console.log('props: ', this.props.location.pathname)
  }

  render() {
    const { auth: { authed, loading }, location: { pathname } } = this.props
    return (
      <div className={styles.container}>
        {
          loading ?
            <div>
              <div className={styles.content}>
                <div>
                  <i className='fa fa-spin fa-circle-o-notch fa-3x' aria-hidden='true'></i>
                </div>
              </div>
              <div className={styles.net}>
                <div className={styles.net1} />
                <div className={styles.net2} />
                <div className={styles.net3} />
              </div>
            </div>
          :
            authed ?
              <div>
                <section className={styles.nav}>
                  <Nav pathname={pathname} />
                </section>
                <section className={styles.app}>
                  {this.props.children}
                </section>
              </div>
            :
              'not authed'
        }
      </div>
    )
  }
}
