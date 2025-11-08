import React from 'react'
import styles from './PricesCard.module.css'
const PricesCard = ({image, title, body}) => {
  return (
    <div className={styles.prices_card}>
        <div><img src={image} alt="" /></div>
        <p>{title}</p>
        <p>{body}</p>
    </div>
  )
}

export default PricesCard
