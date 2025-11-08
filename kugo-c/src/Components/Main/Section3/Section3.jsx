import React from 'react'
import styles from './Section3.module.css'
import service_1 from '../../../../public/Group 1 (38).png'
import service_2 from '../../../../public/Mask Group (5).png'
import actia from '../../../../public/Group 1 (39).png'
const Section3 = () => {
  return (
    <div className={styles.secThreeAll}>
        <div className={styles.secThree}>
            <div className={styles.serviceObs}>
                <div className={styles.cardService}>
                    <p>Подбор модели <br /> электросамоката</p>
                    <p>Пройдите тест и выберите <br /> электросамокат по своим критериям</p>
                    <p>Подобрать модель</p>
                    <img src={service_1} alt="" />
                </div>
                <div className={styles.cardService}>
                    <p>Сервисное <br />обслуживание</p>
                    <p>Крупнейший сервисный центр <br /> в России для продуктов Kugoo</p>
                    <p>Подобрать модель</p>
                    <img src={service_2} alt="" />
                </div>
            </div>
            <div className={styles.deliveryall}>
                <div className={styles.delivery}>
                    <div><img src={actia} alt="" /></div>
                    <p>Бесплатная доставка <br /> электросамокатов <br /> по России до 01.09</p>
                    <div><button>Подробнее</button></div>
                </div>
            </div>
            </div>
            
    </div>
  )
}

export default Section3
