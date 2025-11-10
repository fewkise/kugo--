import React, { useRef } from 'react'
import styles from './Section10.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'


import image_card_1 from '../../../../public/Mask Group (14).png'
import image_card_2 from '../../../../public/Mask Group (15).png'
import image_card_3 from '../../../../public/Mask Group (16).png'
import image_card_4 from '../../../../public/Mask Group (18).png'
import arrow_2 from '../../../../public/Arrow 5 (Stroke).png'
import date from '../../../../public/Group (1).png'
import views from '../../../../public/Group (2).png'



const Section10 = () => {
  const swiperRef = useRef(null)

  const slides = [
    {
      img: image_card_1,
      title: 'Как правильно заряжать электросамокат',
      desc: 'Один из первых вопросов, который волнует после покупки электросамоката.',
      date: '01.09.2021',
      viewsCount: 53,
    },
    {
      img: image_card_2,
      title: 'Как правильно заряжать электросамокат',
      desc: 'Один из первых вопросов, который волнует после покупки электросамоката.',
      date: '01.09.2021',
      viewsCount: 53,
    },
    {
      img: image_card_3,
      title: 'Как правильно заряжать электросамокат',
      desc: 'Один из первых вопросов, который волнует после покупки электросамоката.',
      date: '01.09.2021',
      viewsCount: 53,
    },
    {
      img: image_card_4,
      title: 'Как правильно заряжать электросамокат',
      desc: 'Один из первых вопросов, который волнует после покупки электросамоката.',
      date: '01.09.2021',
      viewsCount: 53,
    },
    {
      img: image_card_1,
      title: 'Как правильно заряжать электросамокат',
      desc: 'Один из первых вопросов, который волнует после покупки электросамоката.',
      date: '01.09.2021',
      viewsCount: 53,
    },
    {
      img: image_card_2,
      title: 'Как правильно заряжать электросамокат',
      desc: 'Один из первых вопросов, который волнует после покупки электросамоката.',
      date: '01.09.2021',
      viewsCount: 53,
    },
    {
      img: image_card_3,
      title: 'Как правильно заряжать электросамокат',
      desc: 'Один из первых вопросов, который волнует после покупки электросамоката.',
      date: '01.09.2021',
      viewsCount: 53,
    },
    {
      img: image_card_4,
      title: 'Как правильно заряжать электросамокат',
      desc: 'Один из первых вопросов, который волнует после покупки электросамоката.',
      date: '01.09.2021',
      viewsCount: 53,
    },
  ]

  return (
    <div className={styles.sec_ten_all}>
      <div className={styles.sec_ten}>
        <div className={styles.fornazv}>
          <p>Новые статьи в блоге</p>
        </div>

        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          loop={true}
          slidesPerView={"auto"}
          className={styles.slider}
          style={{overflow:"visible"}}
        >
          {slides.map(({ img, title, desc, date: d, viewsCount }, idx) => (
            <SwiperSlide style={{width:"15%"}} key={idx} className={styles.slide}>
              <div>
                <img src={img} alt="" />
              </div>
              <div className={styles.opis}>
                <p className={styles.fortitle}>{title}</p>
                <p>{desc}</p>
                <div className={styles.statstop}>
                  <div className={styles.forstats}>
                    <div>
                      <img src={date} alt="" />
                    </div>
                    <p>{d}</p>
                  </div>
                  <div className={styles.forstats}>
                    <div>
                      <img src={views} alt="" />
                    </div>
                    <p>{viewsCount}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        
      </div>
    </div>
  )
}

export default Section10