import React from 'react'
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome'
import styles from './Nav.scss'

const Nav = () => (
  <div className={styles.nav}>
    <h1 className={styles.header}>
      <span>j</span>
      mow
    </h1>

    <ul className={styles.links}>
      <li className={`${styles.link}`}>
        <Link to='/'>
          <FontAwesome name='home' />
        </Link>
      </li>
      <li className={styles.link}>
        <Link to='/wallet'>
          <FontAwesome name='btc' />
        </Link>
      </li>
    </ul>
  </div>
)

export default Nav