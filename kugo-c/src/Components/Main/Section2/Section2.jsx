import React from 'react'
import styles from './Section2.module.css'
import ProductCard from './ProductCard/ProductCard'
import ProductData from './ProductData/ProductData'
const ProductPage = () => {
  return (
    <div className={styles.allcatalogue}>
        <div className={styles.catalogue}>
        <div className={styles.fornazv}>
            <h1>Электросамокаты</h1>
            <div className={styles.category}>
                <button>Хиты продаж</button>
                <button>Для города</button>
                <button>Для взрослых</button>
                <button>Для детей</button>
            </div>
        </div>
        
            <ProductData>
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
        </ProductData>
        <button className={styles.buttonViewAll}>Смотреть всё</button>
        </div>

      
    </div>
  );
};

export default ProductPage;
