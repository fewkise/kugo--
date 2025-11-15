import React from 'react'
import styles from './MainService.module.css'
import Section1S from './Section1S/Section1S'
import Section2S from './Section2S/Section2S'
import Section3S from './Section3S/Section3S'
import Section4S from './Section4S/Section4S'
import Section5S from './Section5S/Section5S'
import Section6S from './Section6S/Section6S'
import Section7S from './Section7S/Section7S'
import Section8S from './Section8S/Section8S'
import Section9S from './Section9S/Section9S'
import Section11 from '../Main/Section11/Section11'
import Section10S from './Section10S/Section10S'
const MainService = () => {
  return (
    <div className={styles.mainService}>
      <Section1S/>
      <Section2S/>
      <Section3S/>
      <Section4S/>
      <Section5S/>
      <Section6S/>
      <Section7S/>
      <Section8S/>
      <Section9S/>
      <Section11/>
      <Section10S/>
    </div>
  )
}

export default MainService
