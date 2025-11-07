import React from 'react'
import styles from './Main.module.css'
import Section1 from './Section1/Section1'
import Section2 from './Section2/Section2'
const Main = () => {
  return (
    <div className={styles.mainSec}>
      <Section1/>
      <Section2/>
    </div>
  )
}

export default Main
