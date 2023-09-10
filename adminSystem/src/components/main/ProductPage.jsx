import Product from './Product'
import './ProductPage.css'

//import products
import product1 from '../../assets/productImages/athletic-cotton-socks-6-pairs.jpg';
import product2 from '../../assets/productImages/intermediate-composite-basketball.jpg';
import product3 from "../../assets/productImages/adults-plain-cotton-tshirt-2-pack-teal.jpg"
import product4 from "../../assets/productImages/black-2-slot-toaster.jpg";
import product5 from "../../assets/productImages/6-piece-white-dinner-plate-set.jpg";

//import stars
import star4 from '../../assets/ratings/rating-40.png';
import star45 from '../../assets/ratings/rating-45.png';
import star50 from '../../assets/ratings/rating-50.png';




import React, { useState } from 'react'

const ProductPage = () => {
  const [products, setProducts] = useState([{
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: product1,
    name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    rating: {
      stars: star45,
      count: 87
    },
    priceCents: 1090
  },
  {
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    image: product2,
    name: "Intermediate Size Basketball",
    rating: {
      stars: star4,
      count: 127
    },
    priceCents: 2095
  },
  {
    id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    image: product3,
    name: "Adults Plain Cotton T-Shirt - 2 Pack",
    rating: {
      stars: star45,
      count: 56
    },
    priceCents: 799
  },
  {
    id: "54e0eccd-8f36-462b-b68a-8182611d9add",
    image: product4,
    name: "2 Slot Toaster - Black",
    rating: {
      stars: star50,
      count: 2197
    },
    priceCents: 1899
  },
  {
    id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
    image: product5,
    name: "6 Piece White Dinner Plate Set",
    rating: {
      stars: star4,
      count: 37
    },
    priceCents: 2067
  }])
  return (
    <div className='products'>
      {products.length ? (
        products.map(product => (
          <Product key={product.id} product={product} />
        ))) : (
        <p className='no-product'>
          No product to display!
        </p>
      )}

    </div>
  )
}

export default ProductPage

