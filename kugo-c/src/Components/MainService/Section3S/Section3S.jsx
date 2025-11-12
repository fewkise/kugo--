import React from 'react'
import styles from './Section3S.module.css'
const Section3S = () => {
  return (
    <div className={styles.sec_three_all}>
      <div className={styles.sec_three}>
        <div className={styles.nazv}>
          <p>Стоимость ремонта</p>
          <p>Точную стоимость работ вам озвучит специалист сервисного центра после диагностики. Примерные цены на ремонт без учета запчастей смотрите ниже.</p>
          <div className={styles.category}>
            <button>Электросамокаты</button>
            <button>Электровелосипеды</button>
            <button>Робот-пылесосы</button>
            <button>Электровелосипеды</button>
          </div>
        </div>
        <div className={styles.prices}>
            <div className={styles.slevaprice}>
              <div>
                <p>Kugoo Kirin M4</p>
              </div>
              <div>
                <p>Kugoo Kirin S2</p>
              </div>
              <div>
                <p>Kugoo Kirin M5</p>
              </div>
              <div>
                <p>Kugoo Kirin M7</p>
              </div>
              <div>
                <p>Kugoo Kirin M8</p>
              </div>
            </div>
            <div className={styles.spravaprice}>
              <div className={styles.contr}>
                <p>Замена/установка контроллера</p>
                <p>от 1500 руб.</p>
              </div>
              <div className={styles.contr}>
                <p>Замена/установка контроллера</p>
                <p>от 1500 руб.</p>
              </div>
              <div className={styles.contr}>
                <p>Замена/установка контроллера</p>
                <p>от 1500 руб.</p>
              </div>
              <div className={styles.contr}>
                <p>Замена/установка контроллера</p>
                <p>от 1500 руб.</p>
              </div>
              <div className={styles.contr}>
                <p>Замена/установка контроллера</p>
                <p>от 1500 руб.</p>
              </div>
              <div className={styles.contr}>
                <p>Замена/установка контроллера</p>
                <p>от 1500 руб.</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Section3S
