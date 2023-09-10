import { Link } from 'react-router-dom'
import './Navbar.css'

import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="search">
        <input
          type="text"
          className='search-bar'
          placeholder='Search...'
        />
        <button className="search-btn">Search</button>
      </div>

      <ul>
        <li><Link to={`/`}>Home</Link></li>
        <li><Link to={`/products`}>Products</Link></li>
        <li><Link to={`/about`}>About</Link></li>
      </ul>
    </div>
  )
}

export default Navbar