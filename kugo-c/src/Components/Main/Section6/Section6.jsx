import React from 'react'
import styles from './Section6.module.css'
import PricesCard from './PricesCard/PricesCard'
import PricesData from './PricesData/PricesData'
const Section6 = () => {
  return (
    <div className={styles.sec_six_all}>
        <div className={styles.sec_six}>
            <div className={styles.for_nazv}>
                <h3>Предлагаем самые выгодные цены <br /> на продукты Kugoo за счет прямых поставок</h3>
                <p>и заботимся об удобстве покупателей</p>
                <div className={styles.for_btns}>
                    <button>Интернет-магазин</button>
                    <button>Сервисный центр</button>
                </div>
            </div>
            <PricesData>
                {products => (
            <div className={styles.price_holder}>
                {products.map(product => (
                <PricesCard
                    key={product.id}
                    title={product.title}
                    body={product.body}
                    image={product.image}
                />
                ))}
            </div>
      )}
            </PricesData>
        </div>
    </div>
  )
}

export default Section6
