import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import velo from '../../../../public/image 1493.png'
import velo2 from '../../../../public/image 641.png'
import robo1 from '../../../../public/Mask Group (24).png'
import robo2 from '../../../../public/Mask Group (25).png'
import robo3 from '../../../../public/Mask Group (26).png'
import robo4 from '../../../../public/Mask Group (27).png'
import robo5 from '../../../../public/Group 1758.png'
import styles from './Section8S.module.css'

const Section8S = () => {
  return (
    <div className={styles.eight_sec_all}>
      <div className={styles.eight_sec}>
        <div className={styles.fornazv}>
            <p style={{fontSize:"35px", fontWeight:"600", textTransform:"uppercase"}}>Команда сервисного центра</p>
            <div className={styles.foremoji}>
                <div className={styles.cont}>
                    <div><img src={velo} alt="" /></div>
                    <p>Специалисты сервисного центра подготавливают самокаты к отправке вам, проводят техническое обслуживание, тюнингуют и при необходимости ремонтируют их</p>
                </div>
                <div className={styles.cont}>
                    <div><img src={velo2} alt="" /></div>
                    <p>Специалисты сервисного центра подготавливают самокаты к отправке вам, проводят техническое обслуживание, тюнингуют и при необходимости ремонтируют их</p>
                </div>
            </div>
        </div>
        <div className={styles.slider}>
          <Swiper
            spaceBetween={30}
            slidesPerView={5}
            grabCursor={true}
            loop={true}
          >
            {[robo1, robo2, robo3, robo4, robo5,robo1, robo2, robo3, robo4, robo5].map((img, index) => (
              <SwiperSlide key={index}>
                <div style={{display:"flex", flexDirection:"column", rowGap:"0.5rem", textAlign:"center"}} className={styles.slide}>
                  <div><img src={img} alt="" /></div>
                  <p style={{fontSize:"18px", fontWeight:"600"}}>Дмитрий Никитенко</p>
                  <p>Руководитель сервисного центра</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Section8S