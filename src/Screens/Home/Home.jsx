import React from 'react';
import styles from './Home.module.scss'

const Home = ({children}) => {
  return (
      <div className={styles.main_Home_container}>
        {children}
      </div>
    )
}

export default Home;