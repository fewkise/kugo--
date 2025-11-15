import React, { useState } from 'react'
import styles from './Section5C.module.css'
import check from '../../../../public/CheckCircle1.png'

const PhoneInput = ({ value, onChange }) => {
  // Форматируем номер в формате +7 (_) _--
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
      placeholder="+7 (_) _--"
      maxLength={18}
      required
      className={styles.phoneInput}
    />
  )
}

const Section5C = () => {
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
            Получите готовый план <br /> развития бизнеса <br /> по продаже товаров kugoo
          </p>
          <ul>
            <li><p>Подготовим для вас бизнес-план, который включает:</p></li>
            <li><div><img src={check} alt="check" /></div><p>индивидуальный прайс-лист</p></li>
            <li><div><img src={check} alt="check" /></div><p>расчет прогнозируемой прибыли и сроков окупаемости</p></li>
            <li><div><img src={check} alt="check" /></div><p>бренд-зону Kugoo</p></li>
            <li><div><img src={check} alt="check" /></div><p>разработку сайта</p></li>
            <li><div><img src={check} alt="check" /></div><p>и еще +15 услуг под ключ</p></li>
          </ul>
        </div>
        <div className={styles.fortelephone}>
          <div style={{ fontWeight: 'bold', fontSize: 25, marginBottom: 10, color: "white", textTransform: "uppercase", textAlign: "center" }}>
            Получите прайс-лист <br /> с оптовыми ценами
          </div>
          <div style={{ fontSize: 16, marginBottom: 20, color: "white", textAlign: "center" }}>
            а также рассчитаем вашу прибыль <br/> от продажи товаров Kugoo
          </div>

          <form>
            <PhoneInput value={phone} onChange={setPhone} />
            <button
              type='submit'
            >
              Скачать прайс-лист
            </button>
          </form>

          <div>
            <div className={styles.forcheck}>
              <input type="checkbox" id="horns" name="horns" />
              <label htmlFor="horns">Нажимая на кнопку, вы соглашаетесь на обработку персональных данных и политикой конфиденциальности</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section5C