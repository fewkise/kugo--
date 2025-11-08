import React from 'react'
import './CategoriesCard.module.css'
import styles from './CategoriesCard.module.css'
const CategoriesCard = ({item, price, image}) => {
  return (
    <div className={styles.categoryCard}>
        <div className={styles.card}>
            <img src={image} alt="" />
            <div className={styles.opis}>
                <p>{item}</p>
                <p>от {price}₽</p>
            </div>
        </div>
    </div>
  )
}

export default CategoriesCard
