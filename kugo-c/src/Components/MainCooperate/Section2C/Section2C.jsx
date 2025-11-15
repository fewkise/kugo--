import React from 'react'
import styles from './Section2C.module.css'
import check from '../../../../public/CheckCircle.png'
import slideimg from '../../../../public/Снимок экрана 2021-10-01 в 12.38 1.png'
import arrow from '../../../../public/Arrow 5 (Stroke) (1).png'
import arrow2 from '../../../../public/Arrow 5 (Stroke) (2).png'
const Section2C = () => {
  return (
    <div className={styles.sec_two_all}>
        <div className={styles.sec_two}>
            <div className={styles.sleva}>
                <p className={styles.fornazv}>Выбирайте популярные товары <br /> без наценок посредников</p>
                <p>являясь официальным дилером Kugoo в России</p>
                <ul>
                    <li><p>Сотрудничая с нами, вы получите:</p></li>
                    <li><div><img src={check} alt="" /></div><p>Гарантию на товары 1 месяц и возможность приобрести годовую гарантию</p></li>
                    <li><div><img src={check} alt="" /></div><p>Медиаконтент, который можно разместить на своем сайте и соцсетях</p></li>
                    <li><div><img src={check} alt="" /></div><p>Удобные способы оплаты — наличный и безналичный расчет</p></li>
                    <li><div><img src={check} alt="" /></div><p>Отсутствие демпинга на рынке за счет контролируемой МРЦ</p></li>
                </ul>
                <div className={styles.fordisc}>
                    <div>
                        <p>До <span>25%</span></p>
                        <p>ваша прибыль с продажи <br /> единицы товара Kugoo</p>
                    </div>
                    <div>
                        <p>от <span>3 шт.</span></p>
                        <p>минимальная <br /> оптовая партия</p>
                    </div>
                </div>
            </div>
            <div className={styles.sprava}>
                <div className={styles.percent}>
                    <p>93%</p>
                    <p>партнеров  становятся постоянными, благодаря нашему подходу</p>
                </div>
                <div className={styles.slider}>
                    <div className={styles.navigation}>
                        <button className={styles.prev}>
                            <div>
                                <img src={arrow} alt="" />
                            </div>
                        </button>
                        <button className={styles.next}>
                            <div>
                                <img src={arrow2} alt="" />
                            </div>
                        </button>

                    </div>
                    <div className={styles.slide}>
                        <img src={slideimg} alt="" />
                    </div>
                    <div className={styles.slide}>
                        <img src={slideimg} alt="" />
                    </div>
                    <div className={styles.slide}>
                        <img src={slideimg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section2C
