import React from 'react'
import styles from './Section3C.module.css'
import map from '../../../../public/Group 1772.png'
const Section3C = () => {
  return (
    <div className={styles.sec_three_all}>
      <div className={styles.sec_three}>
        <div className={styles.nazv}>
            <p>Доставляем со складов по <span>Москве</span>,<br /> <span>Краснодару и минску бесплатно</span>, по России — <br /> любой транспортной компанией на ваш выбор</p>
            <p>Ежегодно оформляем и доставляем более 1 000 оптовых и розничных заказов. <br /> Всегда в наличии на складах весь ассортимент, представленный в каталоге.</p>
        </div>
        <div>
            <img src={map} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Section3C
