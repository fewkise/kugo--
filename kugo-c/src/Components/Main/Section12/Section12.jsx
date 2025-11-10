import React from 'react'
import styles from './Section12.module.css'
import ProductCard from '../Section2/ProductCard/ProductCard'
import ProductDataTwo from '../Section2/ProductDataTwo/ProductDataTwo'
const Section12 = () => {
  return (
    <div className={styles.twelve_sec_all}>
        <div className={styles.twelve_sec}>
            <div className={styles.fornazv}>
                <p>ЧАСТО ПОКУПАЮТ</p>
            </div>
        <ProductDataTwo>
            {products => (
            <div className={styles.catalogueholder}>
                {products.map(product => (
                <ProductCard 
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    battery={product.battery}
                    energy={product.energy}
                    speed={product.speed}
                    time={product.time}
                    photo={product.photo}
                    hit={product.hit}
                />
                ))}
            </div>
            )}
        </ProductDataTwo>
        </div>
       
    </div>
  )
}

export default Section12
