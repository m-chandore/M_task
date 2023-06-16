import React from 'react'
import { NavLink } from 'react-router-dom'
import Login from './buttons/Login'
import Favorite from './buttons/Favorite'
import Cart from './buttons/Cart'
const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">SHOPPINGSITE</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" activeclassname="active" exact to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeclassname="active" to="/Product">Product</NavLink>
                            </li>
                       
                        <NavLink className="nav-link "  activeclassname="active" to="/buttons/Login">Login</NavLink><hr/>
                        <NavLink className="nav-link" activeclassname="active" to="/buttons/Favorite">Favorite</NavLink>
                        <NavLink className="nav-link" activeclassname="active" to="/buttons/Cart">Cart</NavLink>
                        
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
