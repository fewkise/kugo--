import React from 'react'
import styles from './ProductCard.module.css'
import accum from '../../../../../public/accumulator 1.png'
import energy_1 from '../../../../../public/power 1.png'
import speedmeter from '../../../../../public/speedometer 1.png'
import timer from '../../../../../public/timer 1.png'
import cart from '../../../../../public/shopping-cart-2 1.png'
import heart from '../../../../../public/Heart11.png'
import vesi from '../../../../../public/Group 1869.png'
const ProductCard = ({name, price, energy, time, speed, battery, photo, hit}) => {
  return (
    
    <div className={styles.cardProduct}>
      <div className={styles.forphoto}>
        <img src={hit} alt="" />
        <img src={photo} alt="phptp" />
        <img src={vesi} alt="" />
      </div>
      <div className={styles.forinfo}>
        <p>{name}</p>
        <ul>
            <li><div><img src={accum} alt="" /></div><p>{battery}</p></li>
            <li><div><img src={energy_1} alt="" /></div><p>{energy}</p></li>
            <li><div><img src={speedmeter} alt="" /></div><p>{speed}</p></li>
            <li><div><img src={timer} alt="" /></div><p>{time}</p></li>
        </ul>
        <div className={styles.forprices}>
            <div className={styles.prices}>
                <p>39 900 ₽</p>
                <p>{price} ₽</p>
            </div>
            <button><div><img src={cart} alt="" /></div></button>
            <button><div><img src={heart} alt="" /></div></button>
        </div>
        <div className={styles.forbuy}><button>Купить в 1 клик</button></div>
      </div>
    </div>
  )
}

export default ProductCard
