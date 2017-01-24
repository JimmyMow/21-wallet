import React from 'react'
import styles from './Loading.scss'

const Loading = () => (
  <div className={styles.loading}>
    <div className={styles.net}>
      <div className={styles.net1} />
      <div className={styles.net2} />
      <div className={styles.net3} />
    </div>
  </div>
)

export default Loading