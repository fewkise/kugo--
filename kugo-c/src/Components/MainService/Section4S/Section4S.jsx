import React from 'react'
import styles from './Section4S.module.css'
import confa from '../../../../public/Group 1724.png'
import confa2 from '../../../../public/Group 1652.png'
const Section4S = () => {
  return (
    <div className={styles.sec_four_all}>
      <div className={styles.sec_four}>
        <div>
            <img src={confa} alt="" />
        </div>
        <div className={styles.reason}>
            <div><img src={confa2} alt="" /></div>
            <p>Определим причину <br /> неисправности удаленно <br />или на диагностике!</p>
            <div><button>Записаться на диагностику</button></div>
        </div>
      </div>
    </div>
  )
}

export default Section4S
