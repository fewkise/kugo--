import React from 'react'
import styles from './Section10S.module.css'
import nav from '../../../../public/Group (3).png'
import nav1 from '../../../../public/call 1.png'
import nav2 from '../../../../public/warning 1.png'
const Section10S = () => {
  return (
    <div className={styles.sec_ten_all}>
        <div className={styles.nazv}>
                <p style={{fontSize:"35px", textTransform:"uppercase", fontWeight:"600"}}>Адреса сервисных центров</p>
            </div>
        <div className={styles.sec_ten}>
            
            <div className={styles.adress}>
                <div className={styles.city}>
                    <p style={{fontSize:"18px", textTransform:"uppercase", fontWeight:"600"}}>Москва</p>
                    <ul>
                        <li><div><img src={nav} alt="" /></div><p>Ткацкая улица, 5с16</p></li>
                        <li><p>Пн - Вс 10:00 - 19:00</p></li>
                        <li><p>Смотреть на карте</p></li>
                    </ul>
                    <ul>
                        <li><div><img src={nav1} alt="" /></div><p>+7 (499) 350-76-92</p></li>
                    </ul>
                    <ul>
                        <li><div><img src={nav2} alt="" /></div><p>При себе иметь паспорт для <br /> прохождения через пропускной пункт</p></li>
                    </ul>
                </div>
                <div className={styles.city}>
                    <p style={{fontSize:"18px", textTransform:"uppercase", fontWeight:"600"}}>Санкт-Петербург</p>
                    <ul>
                        <li><div><img src={nav} alt="" /></div><p>Фрунзе улица, 2</p></li>
                        <li><p>Пн - Вс  10:00 - 20:00</p></li>
                        <li><p>Смотреть на карте</p></li>
                    </ul>
                    <ul>
                        <li><div><img src={nav1} alt="" /></div><p>+7 (499) 350-76-92</p></li>
                    </ul>
                </div>
                <div className={styles.city}>
                    <p style={{fontSize:"18px", textTransform:"uppercase", fontWeight:"600"}}>Краснодар</p>
                    <ul>
                        <li><div><img src={nav} alt="" /></div><p>Восточно-Кругликовская улица, 86</p></li>
                        <li><p>Вт - Сб 10:00 - 20:00</p></li>
                        <li><p>Смотреть на карте</p></li>
                    </ul>
                    <ul>
                        <li><div><img src={nav1} alt="" /></div><p>+7 (499) 350-76-92</p></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section10S
