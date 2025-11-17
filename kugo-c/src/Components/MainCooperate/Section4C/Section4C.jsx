import React from 'react'
import styles from './Section4C.module.css'
import image from '../../../../public/Group 1788.png'
const Section4C = () => {
  return (
    <div className={styles.sec_four_all}>
      <div className={styles.sec_four}>
        <div className={styles.nazv}>
            <p>Покупайте товар тогда, когда получите <br /> на него заказ и оплату от своего клиента</p>
            <p>За 4 года разработали удобную схему дропшипинга</p>
        </div>
        <div><img draggable="false" src={image} alt="" /></div>
      </div>
    </div>
  )
}

export default Section4C
