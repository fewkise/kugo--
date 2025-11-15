import React from 'react'
import styles from './Section6C.module.css'
import image from '../../../../public/Group 1789.png'
const Section6C = () => {
  return (
    <div className={styles.sec_six_all}>
        <div className={styles.sec_six}>
            <div className={styles.sleva}>
                <p>Kugoo — самый популярный бренд электротранспорта в России</p>
                <p>Количество поисковых запросов от потенциальных клиентов в 2020 г. по сравнению с 2019 г. выросло в 2 раза согласно сервису оценки спроса и популярности.</p>
                <p>Kugoo имеет лидирующие позиции среди конкурирующих брендов: спрос на продукцию от завода Jilong выше в несколько раз.</p>
            </div>
            <div>
                <img src={image} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Section6C
