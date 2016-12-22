import React, { Component } from 'react'
import { Link } from 'react-router'
import styles from './Signup.css'


export default class Signup extends Component {
  render() {
    return (
      <div className={styles.signup}>
        <div className={styles.content}>
          <div>
            <h2>Install 21</h2>
            <p>
              Looks like you don't have 21 installed yet and a Bitcoin wallet created. Open your terminal application, run "curl http://21.co | sh" and then run "wallet create"
            </p>
          </div>
          <div className={styles.video}>
            <img src='https://assets.21.co/landing/img/content/terminal.gif?1482424982938' />
          </div>
        </div>
      </div>
    );
  }
}
