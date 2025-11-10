import React from 'react'
import styles from './Section1S.module.css'
import vid_1 from '../../../../public/Group 1 (40).png'
import vid_2 from '../../../../public/Group 1 (43).png'
import vid_3 from '../../../../public/Group 1 (42).png'
const Section1S = () => {
  return (
    <div className={styles.sec_first_all}>
        <div className={styles.sec_first}>
            <p className={styles.nazv}>Ремонт и обслуживание <br />товаров Kugoo Kirin</p>
            <p className={styles.twonazv}>в фирменных сервисых центрах</p>
            <div className={styles.forvids}>
                <div className={styles.forvidsinside}>
                    <div>
                        <img src={vid_1} alt="" />
                    </div>
                    <p>Сервисные центры в Москве, <br /> Санкт-Петербурге и Краснодаре</p>
                </div>
                <div className={styles.forvidsinside}>
                    <div>
                        <img src={vid_2} alt="" />
                    </div>
                    <p>Гарантия 14 дней <br /> на ремонт</p>
                </div>
                <div className={styles.forvidsinside}>
                    <div>
                        <img src={vid_3} alt="" />
                    </div>
                    <p>Всегда в наличии оригинальные запчасти <br /> от производителя</p>
                </div>
            </div>
            <div><button>Записаться</button></div>
            
        </div>
    </div>
  )
}

export default Section1S
