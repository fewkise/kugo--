import React from 'react'
import styles from './MainService.module.css'
import Section1S from './Section1S/Section1S'
import Section2S from './Section2S/Section2S'
import Section3S from './Section3S/Section3S'
const MainService = () => {
  return (
    <div className={styles.mainService}>
      <Section1S/>
      <Section2S/>
      <Section3S/>
    </div>
  )
}

export default MainService
