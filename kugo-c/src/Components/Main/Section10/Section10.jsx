import React from 'react'
import styles from './Section10.module.css'
import image_card_1 from '../../../../public/Mask Group (14).png'
import date from '../../../../public/Group (1).png'
import views from '../../../../public/Group (2).png'
const Section10 = () => {
  return (
    <div className={styles.sec_ten_all}>
        <div className={styles.sec_ten}>
            <div>
                <p>Новые статьи в блоге</p>
            </div>
            <div className={styles.slider}s>
                <div className={styles.slide}>
                    <div>
                        <img src={image_card_1} alt="" />
                    </div>
                    <div className={styles.opis}>
                        <p>Как правильно заряжать электросамокат</p>
                        <p>Один из первых вопросов, который волнует после покупки электросамоката.</p>
                        <div>
                            <div>
                                <div><img src={date} alt="" /></div>
                                <p>01.09.2021</p>
                            </div>
                            <div>
                                <div><img src={views} alt="" /></div>
                                <p>53</p>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section10
