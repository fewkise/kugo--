import React from 'react'
import styles from './ServicePage.module.css'
import MainService from '../../Components/MainService/MainService'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
const ServicePage = () => {
  return (
    <div className={styles.service_page}>
      <Header/>
      <MainService/>
      <Footer/>
    </div>
  )
}

export default ServicePage
