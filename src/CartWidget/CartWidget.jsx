import React from 'react';
import Cart from '../icons/Cart';
import '../NavBar/navBar.css'

const CartWidget = () => {
  return (
    <div>
      <Cart />
      <span className='carrito'></span>
    </div>
  );
};

export default CartWidget;
