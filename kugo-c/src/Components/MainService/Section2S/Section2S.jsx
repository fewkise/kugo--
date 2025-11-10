import React from 'react'
import styles from './Section2S.module.css'
import circle from '../../../../public/Mask Group (20).png'
const Section2S = () => {
  return (
    <div className={styles.sec_two_all}>
        <div className={styles.sec_two}>
            <div className={styles.fornazv}>
                <p>Проведем диагностику <br /> и отремонтируем любую неисправность</p>
            </div>
            <div className={styles.circle_all}>
                    <ul>
                        <li><p>Ремонт от 1 дня</p><p>Устраним любую неисправность. Обычно делаем это за 1-3 дня, если ремонт сложный — предупредим заранее.</p></li>
                        <li><p>Ремонтируем только то, что сломалось</p><p>Не навязываем услуги, диагностируем и заранее обговариваем стоимость ремонта.</p></li>
                        <li><p>Оригинальные запчасти</p><p>Благодаря прямой связи с производителем имеем в наличии все необходимые новые комплектующие для ремонта.</p></li>
                    </ul>
                    <div><img src={circle} alt="" /></div>
                    <ul>
                        <li><p>Гарантия</p><p>14 дней на ремонт</p></li>
                        <li><p>Бесплатный ремонт</p><p>в течение 1 года после покупки</p></li>
                        <li><p>Расширенная гарантия</p><p>до 36 месяцев</p></li>
                    </ul>
            </div>
        </div>
    </div>
  )
}

export default Section2S
