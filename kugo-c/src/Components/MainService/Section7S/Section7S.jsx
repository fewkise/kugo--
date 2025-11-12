import React from 'react'
import styles from './Section7S.module.css'
import check from '../../../../public/CheckCircle.png'
const Section7S = () => {
  return (
    <div className={styles.seven_all_sec}>
        <div className={styles.seven_sec}>
            <div className={styles.fortext}>
                <p className={styles.fornazv}>Заберем ваш самокат для <br />ремонта и вернем обратно</p>
                <p>Доставка электросамокатов в/из сервисного центра курьером в Москве.</p>
                <p>Что дает гидроизоляция:</p>
                <div className={styles.forspisok}>
                    <div className={styles.spisok}>
                        <div><img src={check} alt="" /></div>
                        <p>600 руб. в одну сторону</p>
                    </div>
                    <div className={styles.spisok}>
                        <div><img src={check} alt="" /></div>
                        <p>600 руб. в одну сторону</p>
                    </div>
                </div>
                <div className={styles.forbtn}>
                    <button>Заказать доставку</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section7S
