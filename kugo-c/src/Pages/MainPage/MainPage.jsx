import React from 'react'
import styles from './MainPage.module.css'
import Main from '../../Components/Main/Main'
import Header from '../../Components/Header/Header'
const MainPage = () => {
  return (
    <div className={styles.mainpage}>
      <Header/>
      <Main/>
    </div>
  )
}

export default MainPage
