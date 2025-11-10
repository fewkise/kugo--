import React from 'react'
import styles from './Header.module.css'
import logo_1 from '../../../public/viber 1.png'
import logo_2 from '../../../public/003-whatsapp 1.png'
import logo_3 from '../../../public/003-telegram 1.png'
import plus from '../../../public/+.png'
import kugoo from '../../../public/Kugoo.png'
import tripoloski from '../../../public/Group 2 (14).png'
import triangle from '../../../public/Polygon 2.png'
import search from '../../../public/Search.png'
import balance from '../../../public/balance 2.png'
import heart from '../../../public/Heart.png'
import cart from '../../../public/shopping-cart 2.png'
import percent from '../../../public/percent.png'
import { Link, useLocation } from 'react-router-dom'
const Header = () => {
  return (
    <header>
      <div className={styles.nadnav}>
        <div className={styles.dannav}>
        <ul>
          <Link to="/Service"><li><a href="">Сервис</a></li></Link>
          <li><a href="">Сотрудничество</a></li>
          <li><a href="">Заказать звонок</a></li>
          <li><a href=""><div><img src={logo_1} alt="" /></div></a><a href=""><div><img src={logo_2} alt="" /></div></a><a href=""><div><img src={logo_3} alt="" /></div></a></li>
        </ul>
        <ul>
          <li><p>+7 (800) 505-54-61</p><button><div><img src={plus} alt="" /></div></button></li>
        </ul>
        </div>
        
      </div>
      <nav>
        <div className={styles.firstnav}>
          <Link to="/"><div>
            <img src={kugoo} alt="" />
          </div></Link>
          <button><div><img src={tripoloski} alt="" /></div><p>Каталог</p></button>
        </div>

        <form action="">
          <button><p>Везде</p><div><img src={triangle} alt="" /></div></button>
          <input type="text" />
          <button><div><img src={search} alt="" /></div></button>
        </form>
        <div className={styles.forcart}>
          <div><img src={balance} alt="" /></div>
          <div><img src={heart} alt="" /></div>
          <div><img src={cart} alt="" /><p>Корзина</p></div>
        </div>
      </nav>
      <div className={styles.category}>
        <div className={styles.forcat}>
          <button>О магазине</button>
          <button><p>Доставка и оплата</p><div>Доступна рассрочка</div></button>
          <button>Тест-драйв</button>
          <button>Блог</button>
          <button>Контакты</button>
          <button><p>Акции</p><div><img src={percent} alt="" /></div></button>
        </div>
      </div>
    </header>
  )
}

export default Header
