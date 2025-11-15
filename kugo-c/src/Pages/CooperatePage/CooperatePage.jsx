import React from 'react'
import styles from './CooperatePage.module.css'
import Header from '../../Components/Header/Header'
import MainCooperate from '../../Components/MainCooperate/MainCooperate'
const CooperatePage = () => {
  return (
    <div className={styles.cooperate_page}>
      <Header/>
      <MainCooperate/>
    </div>
  )
}

export default CooperatePage
