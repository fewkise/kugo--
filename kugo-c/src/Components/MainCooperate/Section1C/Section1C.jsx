import React, { useState } from 'react'
import styles from './Section1C.module.css'
import del1 from '../../../../public/Group 1 (44).png'
import del2 from '../../../../public/Group 1 (45).png'
import del3 from '../../../../public/Group 1 (46).png'
import del4 from '../../../../public/Group 1 (47).png'

const PhoneInput = ({ value, onChange }) => {
  // Форматируем номер в формате +7 (___) ___-__-__
  const formatPhone = (input) => {
    const digits = input.replace(/\D/g, '').substring(0, 11) // максимум 11 цифр, включая 7
    let formatted = '+7 '

    if (digits.length > 1) formatted += '(' + digits.substring(1, 4)
    if (digits.length >= 4) formatted += ') ' + digits.substring(4, 7)
    if (digits.length >= 7) formatted += '-' + digits.substring(7, 9)
    if (digits.length >= 9) formatted += '-' + digits.substring(9, 11)

    return formatted
  }

  const handleChange = (e) => {
    let raw = e.target.value
    let digits = raw.replace(/\D/g, '')
    if (!digits.startsWith('7')) digits = '7' + digits
    onChange(formatPhone('+' + digits))
  }

  return (
    <input
      type="tel"
      value={value}
      onChange={handleChange}
      placeholder="+7 (___) ___-__-__"
      maxLength={18}
      required
      className={styles.phoneInput}
    />
  )
}

const Section1C = () => {
  const [phone, setPhone] = useState('+7 ')



  return (
    <div className={styles.sec_one_all}>
      <div className={styles.sec_one}>
        <div className={styles.fortext}>
          <p
            style={{
              fontSize: '35px',
              fontWeight: '600',
              textTransform: 'uppercase',
            }}
          >
            Покупайте товары Kugoo <br /> по оптовым ценам <br /> от официального
            дилера
          </p>
          <p style={{ fontSize: '20px', fontWeight: '500' }}>
            Ваша прибыль — до 25% от закупочной стоимости 1 единицы товара
          </p>
          <div className={styles.delivery}>
            <div className={styles.del}>
              <div>
                <img src={del1} alt='' />
              </div>
              <p>Отсутствие демпинга — контроль цен и МРЦ</p>
            </div>
            <div className={styles.del}>
              <div>
                <img src={del2} alt='' />
              </div>
              <p>Бесплатная доставка до любой ТК</p>
            </div>
            <div className={styles.del}>
              <div>
                <img src={del3} alt='' />
              </div>
              <p>Беспроблемный возврат и замена брака</p>
            </div>
            <div className={styles.del}>
              <div>
                <img src={del4} alt='' />
              </div>
              <p>Готовый медиаконтент для вашего сайта и соцсетей</p>
            </div>
          </div>
        </div>
        <div className={styles.fortelephone}>
          <div style={{ fontWeight: 'bold', fontSize:25, marginBottom: 10, color:"white", textTransform:"uppercase" , textAlign:"center"}}>
            Получите прайс-лист <br /> с оптовыми ценами
          </div>
          <div style={{ fontSize: 16, marginBottom: 20, color:"white", textAlign:"center" }}>
            а также рассчитаем вашу прибыль <br /> от продажи товаров Kugoo
          </div>

          <form >
            <PhoneInput value={phone} onChange={setPhone} />
            <button
              type='submit'
            >
              Скачать прайс-лист
            </button>
          </form>

          <div
            
          >
            <div className={styles.forcheck}>
    <input type="checkbox" id="horns" name="horns" />
    <label for="horns">Нажимая на кнопку, вы соглашаетесь на обработку  персональных данных и политикой конфиденциальности</label>
  </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section1C