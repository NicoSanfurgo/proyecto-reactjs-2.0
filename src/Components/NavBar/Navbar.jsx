import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './navBar.css'
import { Link } from 'react-router-dom';


const NavBar = ({menus}) =>{
    return(
    <div className='navbar'>
        {
            menus.map((menu)=>{
                return <Link className='navbar__menu' to={menu.href} >{menu.name}</Link>
            })
        }
        <div className='carrito'><CartWidget /></div>
    </div>)
}



export default NavBar;