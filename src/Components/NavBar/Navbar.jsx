import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './navBar.css'
import { Link } from 'react-router-dom';


const NavBar = ({menus}) => {
    return(
        <div className='navbar'>
            <a className='navbar__menu' href='/'>Inicio</a>
            <a className='navbar__menu' href='/productos'>Productos</a>
            <a className='navbar__menu' href='/remeras'>Remeras</a>
            <a className='navbar__menu' href='/figuras'>Figuras</a>
            <a className='navbar__menu' href='/soporte'>Soporte</a>
            <div className='carrito'><CartWidget /></div>
        </div>
    )
}



export default NavBar;