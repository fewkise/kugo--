import React from 'react'
import styles from './ServicePage.module.css'
import MainService from '../../Components/MainService/MainService'
import Header from '../../Components/Header/Header'
const ServicePage = () => {
  return (
    <div className={styles.service_page}>
      <Header/>
      <MainService/>
    </div>
  )
}

export default ServicePage
