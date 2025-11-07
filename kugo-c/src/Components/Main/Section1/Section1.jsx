import React from 'react'
import styles from './Section1.module.css'
import arrow_1 from '../../../../public/Arrow 2.png'
import arrow_2 from '../../../../public/Arrow 2 (1).png'
import yandex from '../../../../public/Group 1 (37).png'
import star from '../../../../public/Star 6.png'
const Section1 = () => {
  return (
    <div className={styles.allsec}>
        <div className={styles.slider}>
            <div className={styles.slidervnutri}>
                <div><p>Новинка</p></div>
                <div><p>Электросамокаты Kugoo Kirin <br /> от официального дилера</p><p>с бесплатной доставкой по РФ от 1 дня</p></div>
                <div><button>Перейти в католог</button></div>
                
                <div className={styles.navigation}>
                    <button><div><img src={arrow_1} alt="" /></div></button>
                    1-5
                    <button><div><img src={arrow_2} alt="" /></div></button>
                </div>
            </div>
        </div>
        <div className={styles.info}>
            <div><p>Гарантия 1 год</p><p>на весь ассортимент</p></div>
            <div><p>рассрочка</p><p>от 6 месяцев</p></div>
            <div><p>Подарки</p><p>и бонусам к покупкам </p></div>
            <div><div><img src={yandex} alt="" /></div><div><p>Яндекс отзывы</p><div><div><img src={star} alt="" /></div><p>4,9</p></div></div></div>
        </div>  
    </div>
    
  )
}

export default Section1
