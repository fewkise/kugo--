import React from 'react'
import photo_1 from '../../../../assets/6V7A6493_1.png'
import hit_1 from '../../../../assets/Group 1663.png'
const products = [
  { id: 1, name: "Kugoo Kirin M4", price: "29 900", energy:"1,2 л.с.", battery: "2000 mAh", time: "5 часов", speed:"60 км/ч", photo: photo_1, hit:hit_1 },
  { id: 2, name: "Kugoo Kirin M4", price: "29 900", energy:"1,2 л.с.", battery: "2000 mAh", time: "5 часов", speed:"60 км/ч", photo: photo_1, hit:hit_1 },
  { id: 3, name: "Kugoo Kirin M4", price: "29 900", energy:"1,2 л.с.", battery: "2000 mAh", time: "5 часов", speed:"60 км/ч", photo: photo_1, hit:hit_1 },
  { id: 4, name: "Kugoo Kirin M4", price: "29 900", energy:"1,2 л.с.", battery: "2000 mAh", time: "5 часов", speed:"60 км/ч", photo: photo_1, hit:hit_1 },
  { id: 5, name: "Kugoo Kirin M4", price: "29 900", energy:"1,2 л.с.", battery: "2000 mAh", time: "5 часов", speed:"60 км/ч", photo: photo_1, hit:hit_1 },
  { id: 6, name: "Kugoo Kirin M4", price: "29 900", energy:"1,2 л.с.", battery: "2000 mAh", time: "5 часов", speed:"60 км/ч", photo: photo_1, hit:hit_1 },
  { id: 7, name: "Kugoo Kirin M4", price: "29 900", energy:"1,2 л.с.", battery: "2000 mAh", time: "5 часов", speed:"60 км/ч", photo: photo_1, hit:hit_1 },
  { id: 8, name: "Kugoo Kirin M4", price: "29 900", energy:"1,2 л.с.", battery: "2000 mAh", time: "5 часов", speed:"60 км/ч", photo: photo_1, hit:hit_1 },
];

const ProductData = ({ children }) => {
  return children(products);
};
export default ProductData
