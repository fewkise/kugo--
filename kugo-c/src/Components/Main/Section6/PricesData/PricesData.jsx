import React from 'react'
import image_1 from '../../../../assets/shopping-cart 2 (1).png'
import image_2 from '../../../../assets/billfold 1.png'
import image_3 from '../../../../assets/guarantee 1.png'
import image_4 from '../../../../assets/delivery 1.png'
import image_5 from '../../../../assets/percentage-discount 1.png'
const products = [
    { id: 1, title: "Х товаров в каталоге", body: "Выбирайте товар, который подходит по цене и характеристикам. Если товара нет в наличии — мы сообщим вам о его поступлении. ", image:image_1},
    { id: 2, title: "5 способов оплаты", body: "Вы можете оплатить покупку наличными, картой, онлайн на сайте, через интернет-банкинг или в кредит от «Сбербанка».", image:image_2},
    { id: 3, title: "Полная документация и гарантия 1 год", body: "При покупке вам выдается кассовый чек, товарный чек и гарантийный талон – эти документы дают право на гарантийное обслуживание.", image:image_3},
    { id: 4, title: "Отправка заказа день в день", body: "Отправляем заказы по всей России день в день или забирайте товар самостоятельно в магазинах в Москве, Санкт-Петербурге и Краснодаре", image:image_4},
    { id: 5, title: "Рассрочка без переплат", body: "В нашем магазине можно приобрести любой товар в рассрочку.Подробнее про условия рассрочки", image:image_5},



]
const PricesData = ({children}) => {
  return children(products);
}

export default PricesData
