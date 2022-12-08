import { Link } from 'react-router-dom';
import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './navBar.css'

const NavBar = ({menus}) =>{
    return(
    <div className='navbar'>
        {
            menus.map((menu)=>{
                return <Link className='navbar__menu' to={menu.href} >{menu.name}</Link>
            })
        }
    </div>)
}

export default NavBar;