import React from 'react'
import styles from './MainCooperate.module.css'
import Section1C from './Section1C/Section1C'
import Section12 from '../../Components/Main/Section12/Section12'
import Section2C from './Section2C/Section2C'
import Section3C from './Section3C/Section3C'
import Section4C from './Section4C/Section4C'
import Section5C from './Section5C/Section5C'
import Section6C from './Section6C/Section6C'
import Section7C from './Section7C/Section7C'
import Section11 from '../Main/Section11/Section11'
import Footer from '../../Components/Footer/Footer'
const MainCooperate = () => {
  return (
    <div className={styles.main_coop}>
      <Section1C/>
      <Section12/>
      <Section2C/>
      <Section3C/>
      <Section4C/>
      <Section5C/>
      <Section6C/>
      <Section7C/>
      <Section11/>
      <Section1C/>
      <Footer/>
    </div>
  )
}

export default MainCooperate
