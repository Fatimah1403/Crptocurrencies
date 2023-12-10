import { Link } from "react-router-dom"
// import './index.css'

// import React from 'react'

function Nav() {
  return (
    <div className="nav">
        <Link to="/">
            <div>CRPYTO PRICES</div>
        </Link>
        <Link to="/currencies">
            <div>CURRENCIES</div>
        </Link>
    </div>
  )
}

export default Nav
