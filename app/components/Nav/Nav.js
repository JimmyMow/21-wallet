import React from 'react'
import FontAwesome from 'react-fontawesome'
import styles from './Nav.scss'

const Nav = () => (
  <div className={styles.nav}>
    <h1 className={styles.header}>
      <span>j</span>
      mow
    </h1>

    <ul className={styles.links}>
      <li className={`${styles.link} ${styles.active}`}>
        <FontAwesome name='home' />
      </li>
      <li className={styles.link}>
        <FontAwesome name='btc' />
      </li>
    </ul>
  </div>
)

export default Nav