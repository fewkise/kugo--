import React from 'react'
import styles from './Section5.module.css'
import arrow from '../../../../public/Arrow 4.png'
import main_five from '../../../../public/Mask Group (10).png'
import triangle from '../../../../public/Polygon 3.png'
const Section5 = () => {
  return (
    <div className={styles.sec_five_all}>
      <div className={styles.sec_five}>
        <div className={styles.five_sleva}>
            <div><img src={main_five} alt="" /></div>
            <div>
                <p>Тест-драйв в Москве</p>
                <p>Оцените все преимущества самокатов лично</p>
                <button>Подробнее <div><img src={arrow} alt="" /></div></button>
            </div>
        </div>
        <div className={styles.five_sprava}>
            <h2>Kugoo-Russia — первый официальный дилер Kugoo Kirin в России</h2>
            <p >Наша цель предоставить полный ассортимент современной продукции Kugoo Kirin, которая улучшает и упрощает жизнь. Стремимся подарить комфорт и эмоции, поэтому помогаем с выбором и внимательно относимся к сервисному обслуживанию.</p>
            <div className={styles.specialise}>
                <h3>Специализируемся исключительно на бренде Kugoo, поэтому вы получите:</h3>
                <ul>
                    <li><div><img src={triangle} alt="" /></div><p>цены от завода-изготовителя Jilong</p></li>
                    <li><div><img src={triangle} alt="" /></div><p>бесплатный тест-драйв самокатов</p></li>
                    <li><div><img src={triangle} alt="" /></div><p>фирменную гарантию 1 год</p></li>
                    <li><div><img src={triangle} alt="" /></div><p>ремонт и обслуживание от 1 дня в собственном сервисном центре</p></li>
                    <li><div><img src={triangle} alt="" /></div><p>более 1 000 запчастей и аксессуаров в наличии</p></li>
                </ul>
                <a href="">Смотреть сертификат</a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Section5
