import React from 'react'
import styles from './Section5S.module.css'
import galochka from '../../../../public/CheckCircle.png'
import photo_1 from '../../../../public/Mask Group (21).png'
import photo_2 from '../../../../public/Mask Group (22).png'
const Section5S = () => {
  return (
    <div className={styles.five_sec_all}>
      <div className={styles.five_sec}>
        <div className={styles.hydro_all}>
            <div>
                <img src={photo_1} alt="" />
            </div>
            <div className={styles.opisanie}>
                <h5>Сделаем гидроизоляцию <br /> электросамоката</h5>
                <p>которая позволит вам кататься в любую погоду</p>
                <p>Гидроизоляция – это защита от проникновения воды. Электросамокат изнутри покрывается специальным веществом, которое предотвращает попадание любой влаги.</p>
                <p className={styles.zir}>Что дает гидроизоляция:</p>
                <ul>
                    <li><div><img src={galochka} alt="" /></div><p>Возможность выезжать в дождь или после дождя</p></li>
                    <li><div><img src={galochka} alt="" /></div><p>Можно ездить в любое время года</p></li>
                    <li><div><img src={galochka} alt="" /></div><p>Защита от влаги, пыли и грязи продлит срок беспроблемного использования.</p></li>
                </ul>
                <p>Подробнее про гидроизоляцию прочитайте <span>в нашей статье</span></p>
            </div>
        </div>
        <div className={` ${styles.two} ${styles.hydro_all}`}>
            <div className={`${styles.opisanie} `}>
                <h5>Продлим срок службы вашего самоката в 2 раза</h5>
                <p>благодаря настройкам от специалистов c опытом 7+ лет</p>
                <p>Перед продажей каждый покупатель может заказать у нас дополнительную услугу – настройка самоката. Для разных моделей Kugoo настройка может отличаться.</p>
                <p>Что входит в настройку:</p>
                <ul>
                    <li><div><img src={galochka} alt="" /></div><p>Регулировка натяжения тормозного троса</p></li>
                    <li><div><img src={galochka} alt="" /></div><p>Регулировка положения тормозной ручки</p></li>
                    <li><div><img src={galochka} alt="" /></div><p>Регулировка тормозных механизмов</p></li>
                    <li><div><img src={galochka} alt="" /></div><p>Протяжка всех соединений</p></li>
                    <li><div><img src={galochka} alt="" /></div><p>И еще более 35 работ.</p></li>
                </ul>
                <p>Подробнее про настройку прочитайте <span>в нашей статье</span></p>
            </div>
            <div>
                <img src={photo_2} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Section5S
