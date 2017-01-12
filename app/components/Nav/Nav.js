import React from 'react'
import styles from './Nav.css'

const Nav = () => (
  <div className={styles.nav}>
    <h1 className={styles.header}>
      <span>j</span>
      mow
    </h1>

    <ul className={styles.links}>
      <li className={`${styles.link} ${styles.active}`}>
        <i className='fa fa-home' aria-hidden='true'></i>
      </li>
      <li className={styles.link}>
        <i className='fa fa-btc' aria-hidden='true'></i>
      </li>
    </ul>
  </div>
)

export default Nav