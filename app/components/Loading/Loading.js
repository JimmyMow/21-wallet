import React from 'react'
import FontAwesome from 'react-fontawesome'
import styles from './Loading.scss'

const Loading = () => (
  <div className={styles.loading}>
    <div className={styles.net}>
      <div className={styles.net1} />
      <div className={styles.net2} />
      <div className={styles.net3} />
    </div>
    <div className={styles.content}>
      <FontAwesome name='btc' />
    </div>
  </div>
)

export default Loading