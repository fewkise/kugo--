import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import styles from './Section9.module.css'

import slider_img_1 from '../../../../public/Group 1680.png'
import slider_img_2 from '../../../../public/Group 1681.png'
import slider_img_3 from '../../../../public/Group 1682.png'
import arrow_2 from '../../../../public/Arrow 5 (Stroke).png'
import arrow from '../../../../public/Polygon 8 (3).png'

const slides = [
  {
    img: slider_img_1,
    text: 'Крутой и городской? Обзор Kugoo XS Plus',
  },
  {
    img: slider_img_2,
    text: 'Крутой и городской? Обзор Kugoo XS Plus',
  },
  {
    img: slider_img_3,
    text: 'Крутой и городской? \nОбзор Kugoo XS Plus', // перенос внутри текста
  },
  {
    img: slider_img_1,
    text: 'Крутой и городской? Обзор Kugoo XS Plus',
  },
  {
    img: slider_img_2,
    text: 'Крутой и городской? Обзор Kugoo XS Plus',
  },
  {
    img: slider_img_3,
    text: 'Крутой и городской? \nОбзор Kugoo XS Plus', // перенос внутри текста
  },
]

const Section9 = () => {
  const navigationNextRef = useRef(null)

  return (
    <div className={styles.sec_nine_all}>
      <div className={styles.sec_nine}>
        <div className={styles.fornazv}>
          <div className={styles.nazv_left}>
            <p>Видеообзоры</p>
            <p>Узнайте больше о самокатах Kugoo и посмотрите сравнительные обзоры разных моделей на нашем YouTube-канале.</p>
          </div>
          <div>
            <a href="">Смотреть все видеообзоры</a>
          </div>
        </div>

        <div className={styles.slider}>
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView="auto"
            navigation={{
              nextEl: navigationNextRef.current,
            }}
             loop={true} 
            onBeforeInit={(swiper) => {
              swiper.params.navigation.nextEl = navigationNextRef.current
            }}
            className={styles.swiper}
          >
            {slides.map(({ img, text }, index) => (
              <SwiperSlide style={{width:"auto", position:"relative"}} key={index} className={index === 0 ? 'big-slide' : ''}>
                <div>
                  <img src={img} alt={text.replace('\n', ' ')} />
                </div>
                <button style={{position:"absolute", display:"flex", alignItems:"center", justifyContent:"center",top:"33%", cursor:"pointer", left:"40%", width:"68px",  height:"68px", borderRadius:"50%", border:"none"}}>
                  <div>
                    <img src={arrow} alt="arrow" />
                  </div>
                </button>
                <p style={{ whiteSpace: 'pre-line' }}>{text}</p>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className={styles.for_navigation}>
            <button ref={navigationNextRef} aria-label="Next slide">
              <div>
                <img src={arrow_2} alt="next" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section9