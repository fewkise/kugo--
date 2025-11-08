import React from 'react'
import image_1 from '../../../../assets/Mask Group (6).png'
import image_2 from '../../../../assets/Mask Group (7).png'
import image_3 from '../../../../assets/Mask Group (8).png'
const products = [
    { id: 1, item: "Робот-пылесоссы", price: "29 900", image:image_1},
    { id: 2, item: "Электровелосипеды", price: "29 900", image:image_2},
    { id: 3, item: "Весы", price: "29 900", image:image_3},
    { id: 4, item: "Робот-пылесоссы", price: "29 900", image:image_1},
    { id: 5, item: "Весы", price: "29 900", image:image_2},
    { id: 6, item: "Робот-пылесоссы", price: "29 900", image:image_3},
    { id: 7, item: "Электровелосипеды", price: "29 900", image:image_1},
    { id: 8, item: "Весы", price: "29 900", image:image_2},



]
const CatagoriesData = ({ children }) => {
    return children(products);
}

export default CatagoriesData
