import React from 'react'
import styles from './Section7C.module.css'

import soc_1 from '../../../../public/012-vk 1.png'
import soc_2 from '../../../../public/013-instagram 1.png'
import soc_3 from '../../../../public/018-youtube 1.png'
import soc_4 from '../../../../public/003-telegram 2.png'
const Section7C = () => {
  return (
    <div className={styles.sec_seven_all}>
      <div className={styles.sec_seven}>
        <div className={styles.fornazv}>
            <p>Общаемся с клиентами, чтобы <br /> знать пожелания и предлагать <br /> лучший ассортимент и сервис</p>
            <p>И еще приняли активное участие в выставке «Велокульт 2021»</p>
            <a href="">Смотреть как это было</a>
        </div>
        <div className={styles.forsocials}>
                <div className={styles.social}>
                    <div className={styles.nazsoc}>
                        <div><img src={soc_1} alt="" /></div>
                        <p>Вконтакте</p>
                    </div>
                    <p>3 300</p>
                </div>
                <div className={styles.social}>
                    <div className={styles.nazsoc}>
                        <div><img src={soc_2} alt="" /></div>
                        <p>Instagram</p>
                    </div>
                    <p>3 300</p>
                </div>
                <div className={styles.social}>
                    <div className={styles.nazsoc}>
                        <div><img src={soc_3} alt="" /></div>
                        <p>YouTube</p>
                    </div>
                    <p>3 300</p>
                </div>
                <div className={styles.social}>
                    <div className={styles.nazsoc}>
                            <div><img src={soc_4} alt="" /></div>
                            <p>Telegram</p>
                        </div>
                        <p>3 300</p>
                    </div>
        </div>
      </div>
    </div>
  )
}

export default Section7C
