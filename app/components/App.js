import React, { Component } from 'react'
import { Link } from 'react-router'
import Nav from './Nav'
import Loading from './Loading'
import styles from './App.scss'
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
            <Loading />
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
