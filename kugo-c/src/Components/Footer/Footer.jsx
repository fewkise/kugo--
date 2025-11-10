import React from 'react'
import styles from './Footer.module.css'
import logo_1 from '../../../public/Kugoo.png'
import logo_2 from '../../../public/Badge.png'
import logo_3 from '../../../public/Badge (1).png'
import logo_4 from '../../../public/Group 1701.png'
import logo_5 from '../../../public/Group 1702.png'
import logo_6 from '../../../public/Group 1704.png'
import logo_7 from '../../../public/Group 1705.png'
import logo_8 from '../../../public/Payment Method.png'
import logo_9 from '../../../public/Payment Method (1).png'
import logo_10 from '../../../public/Payment Method (2).png'
import logo_11 from '../../../public/Payment Method (3).png'
import logo_12 from '../../../public/Payment Method (4).png'
import logo_13 from '../../../public/Payment Method (5).png'
import logo_14 from '../../../public/Payment Method (6).png'
import logo_15 from '../../../public/viber 1 (1).png'
import logo_16 from '../../../public/003-whatsapp 1 (1).png'
import logo_17 from '../../../public/003-telegram 1 (1).png'
const Footer = () => {
  return (
    <div className={styles.footer_all}>
      <div className={styles.nadfooter}>
        <div className={styles.vnutri}>
          <p>Оставьте свою почту и станьте первым,<br /> кто получит скидку на новые самокаты</p>
          <div>
            <input type="text" />
            <button>Подписаться</button>
          </div>
        </div>
      </div>
      <footer>
        <div className={styles.center_footer}>
            <div className={styles.footerTop}>
              <div className={styles.foruls}>
                <ul>
                  <li><p>Каталог товаров</p></li>
                  <li><p>Электросамокаты</p></li>
                  <li><p>Электроскутеры</p></li>
                  <li><p>Электровелосипеды</p></li>
                  <li><p>Электровелосипеды</p></li>
                </ul>
                <ul>
                  <li><p>Покупателям</p></li>
                  <li><p>Сервисный центр</p></li>
                  <li><p>Доставка и оплата</p></li>
                  <li><p>Рассрочка</p></li>
                  <li><p>Тест-драйв</p></li>
                </ul>
                <ul>
                  <li><p>Блог</p></li>
                  <li><p>Сотрудничество</p></li>
                  <li><p>Контакты</p></li>
                  <li><p>Акции</p></li>
                </ul>
              </div>
              <div className={styles.contacts}>
                <div className={styles.nazvcont}>
                  <p>Контакты</p>
                  <a href="">Заказать звонок</a>
                </div>
                <div className={styles.forcontacts}>
                  <div>
                    <p>Call-центр</p>
                    <p>+7 (800) 505-54-61</p>
                    <p>Пн-Вс 10:00 - 20:00</p>
                  </div>
                  <div>
                    <p>Сервисный центр</p>
                    <p>+7 (499) 350-76-92</p>
                    <p>Пн-Вс 10:00 - 20:00</p>
                  </div>
                </div>
                <div className={styles.shops}>
                  <div>
                    <p>Магазин в Москве ул. Ткацкая, 5 стр. 16</p>
                    <p>+7 (499) 406 15 87</p>
                  </div>
                  <div>
                    <p>Магазин в Санкт-Петербурге ул. Фрунзе, 2</p>
                    <p>+7 (499) 406 15 87</p>
                  </div>
                  <div>
                    <p>Магазин в Краснодаре ул. Восточно-Кругликовская, 86</p>
                    <p>+ 7 (800) 505 54 61</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div className={styles.centerFooter}>
          <div className={styles.forlogos}>
            <div>
              <img src={logo_1} alt="" />
            </div>
            <div>
              <img src={logo_2} alt="" />
            </div>
            <div>
              <img src={logo_3} alt="" />
            </div>
          </div>
          <div className={styles.forlogos}>
            <div>
              <img src={logo_4} alt="" />
            </div>
            <div>
              <img src={logo_5} alt="" />
            </div>
            <div>
              <img src={logo_6} alt="" />
            </div>
            <div>
              <img src={logo_7} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.forbottomFooter}>
          <div className={styles.fortxt}>
            <p>Реквизиты</p>
            <p>Политика конфиденциальности</p>
          </div>
          <div className={styles.forboth}>
            <div className={styles.forpays}>
              <div>
                <img src={logo_8} alt="" />
              </div>
              <div>
                <img src={logo_9} alt="" />
              </div>
              <div>
                <img src={logo_10} alt="" />
              </div>
              <div>
                <img src={logo_11} alt="" />
              </div>
              <div>
                <img src={logo_12} alt="" />
              </div>
              <div>
                <img src={logo_13} alt="" />
              </div>
              <div>
                <img src={logo_14} alt="" />
              </div>
            </div>
            <div className={styles.forchat}>
              <p>Online чат:</p>
              <div>
                <img src={logo_15} alt="" />
              </div>
              <div>
                <img src={logo_16} alt="" />
              </div>
              <div>
                <img src={logo_17} alt="" />
              </div>
            </div>
          </div>
        </div>  
      </footer>
    </div>
  )
}

export default Footer
