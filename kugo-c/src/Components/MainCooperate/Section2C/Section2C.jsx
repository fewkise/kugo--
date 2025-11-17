import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

import styles from './Section2C.module.css'

import check from '../../../../public/CheckCircle.png'
import slideimg from '../../../../public/Снимок экрана 2021-10-01 в 12.38 1.png'
import arrow from '../../../../public/Arrow 5 (Stroke) (1).png'
import arrow2 from '../../../../public/Arrow 5 (Stroke) (2).png'

const Section2C = () => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

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
              <button ref={prevRef} className={styles.prev}>
                <div>
                  <img src={arrow} alt="prev" />
                </div>
              </button>
              <button ref={nextRef} className={styles.next}>
                <div>
                  <img src={arrow2} alt="next" />
                </div>
              </button>
            </div>
            <Swiper
              modules={[Navigation]}
              onInit={(swiper) => {
                // подключение навигации к кнопкам
                swiper.params.navigation.prevEl = prevRef.current
                swiper.params.navigation.nextEl = nextRef.current
                swiper.navigation.init()
                swiper.navigation.update()
              }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              slidesPerView={1}
              className={styles.swiperContainer}
              style={{width:"450px"}}
            >
              <SwiperSlide style={{width:"450px"}}>
                <img src={slideimg} alt="slide 1" />
              </SwiperSlide>
              <SwiperSlide style={{width:"450px"}}>
                <img src={slideimg} alt="slide 2" />
              </SwiperSlide>
              <SwiperSlide style={{width:"450px"}}>
                <img src={slideimg} alt="slide 3" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section2C