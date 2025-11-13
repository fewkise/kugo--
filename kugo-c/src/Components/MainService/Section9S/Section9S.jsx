import React from 'react'
import styles from './Section9S.module.css'
import emoji from '../../../../public/image 911.png'
import img1 from '../../../../public/Mask Group (29).png'
import img2 from '../../../../public/Mask Group (30).png'
import img3 from '../../../../public/Mask Group (31).png'
import img4 from '../../../../public/Mask Group (32).png'
import img5 from '../../../../public/Mask Group (33).png'
import img6 from '../../../../public/Mask Group (34).png'
const Section9S = () => {
  return (
    <div className={styles.nine_sec_all}>
        <div className={styles.nine_sec}>
            <div className={styles.fornazv}>
                <p style={{fontSize:"35px", fontWeight:"600", textTransform:"uppercase"}}>Посмотрите <br /> на процесс работы</p>
                <div className={styles.sred}>
                    <div><img src={emoji} alt="" /></div>
                    <div className={styles.zarabotok}>
                        <p>В среднем</p>
                        <p>350 доработок</p>
                        <p>специалисты выполняют за 1 месяц</p>
                    </div>
                </div>
            </div>
            <div className={styles.gallery}>
                <div className={styles.gal}>
                    <div>
                        <img src={img1} alt="" />
                    </div>
                    <div>
                        <img src={img2} alt="" />
                    </div>
                    <div>
                        <img src={img3} alt="" />
                    </div>
                </div>
                <div className={styles.gal}>
                    <div>
                        <img src={img4} alt="" />
                    </div>
                    <div>
                        <img src={img5} alt="" />
                    </div>
                    <div>
                        <img src={img6} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section9S
