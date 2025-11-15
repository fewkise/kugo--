import React from 'react'
import styles from './MainCooperate.module.css'
import Section1C from './Section1C/Section1C'
import Section12 from '../../Components/Main/Section12/Section12'
import Section2C from './Section2C/Section2C'
import Section3C from './Section3C/Section3C'
import Section5C from './Section5C/Section5C'
import Section6C from './Section6C/Section6C'
const MainCooperate = () => {
  return (
    <div className={styles.main_coop}>
      <Section1C/>
      <Section12/>
      <Section2C/>
      <Section3C/>
      <Section5C/>
      <Section6C/>
    </div>
  )
}

export default MainCooperate
