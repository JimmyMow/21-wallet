import React from 'react'
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome'
import styles from './Nav.scss'

const Nav = ({ pathname }) => (
  <div className={styles.nav}>
    <h1 className={styles.header}>
      <span>j</span>
      mow
    </h1>

    <ul className={styles.links}>
      <li className={`${styles.link} ${pathname === '/' ? styles.active : null}`}>
        <Link to='/'>
          <FontAwesome name='home' />
        </Link>
        <div className={`${styles.border}`} />
      </li>
      <li className={`${styles.link} ${pathname === '/wallet' ? styles.active : null}`}>
        <Link to='wallet'>
          <FontAwesome name='btc' />
        </Link>
        <div className={`${styles.border}`} />
      </li>
    </ul>
  </div>
)

export default Nav