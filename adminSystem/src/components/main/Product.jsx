import './Product.css'
import checked_icon from '../../assets/productImages/checkmark.png'

import { Link } from 'react-router-dom'

const Product = ({ product }) => {
  return (
    <article className='product-container'>
      <div className="product-image-container">
        <Link to={`/products/${product.id}`}>
          <img className="product-image"
            src={product.image} />
        </Link>
      </div>

      <div className="product-name limit-text-to-2-lines">
        {product.name}
      </div>

      <div className="product-rating-container">
        <img className="product-rating-stars"
          src={product.rating.stars} />
        <div className="product-rating-count link-primary">
          {product.rating.count}
        </div>
      </div>

      <div className="product-price">
        {product.priceCents}
      </div>

      <div className="product-quantity-container">
        <select>
          <option defaultValue="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div className="product-spacer"></div>

      <div className="added-to-cart">
        <img src={checked_icon} />
        Added
      </div>

      <button className="add-to-cart-button button-primary">
        Add to Cart
      </button>
    </article >
  )
}

export default Product

