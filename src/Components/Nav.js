import React from 'react'
import { Link, withRouter } from 'react-router-dom'
function Nav() {
    const navStyle ={
        color: 'white'
    };

    return (
        <Nav className="nav">
            <h3>Logo</h3>
            <ul className="nav-Links">
                <Link to="/about" style={navStyle}>
                    <li>About</li>
                </Link>
                <Link to="/shop" style={navStyle}>
                    <li>Shop</li>
                </Link>
            </ul>
        </Nav>
    )
}

export default Nav;