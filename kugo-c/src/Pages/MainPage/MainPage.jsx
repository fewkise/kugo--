import React from 'react'
import styles from './MainPage.module.css'
import Main from '../../Components/Main/Main'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
const MainPage = () => {
  return (
    <div className={styles.mainpage}>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default MainPage
