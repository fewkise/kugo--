import React from 'react'
import styles from './Section4.module.css'
import CategoriesCard from './CategoriesCard/CategoriesCard'
import CatagoriesData from './CategoriesData/CatagoriesData'
import manager_img from '../../../assets/Mask Group (9).png'
const Section4 = () => {
  return (
    <div className={styles.sec_four_all}>
      <div className={styles.sec_four}>
        <div className={styles.nazv_holder}>
          <p className={styles.title}>Популярные категории</p>
          <div className={styles.manager}>
            <div>
              <img src={manager_img} alt="" />
            </div>
            <div>
              <p>Менеджер ответит на любой ваш вопрос о продуктах Kugoo</p>
              <a href="">Задать вопрос</a>
            </div>
          </div>
        </div>
        <CatagoriesData>
        {products => (
            <div className={styles.cards_holder}>
                {products.map(product => (
                <CategoriesCard 
                    key={product.id}
                    item={product.item}
                    price={product.price}
                    image={product.image}
                />
                ))}
            </div>
      )}
    </CatagoriesData>
        <div className={styles.forbtn}><button>Смотреть все</button></div>
      </div>
    

    </div>
  )
}

export default Section4
