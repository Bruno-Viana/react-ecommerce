import React, {useContext} from 'react';
import {CartContext} from './CartContext';

export const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  const totalItens = cart.reduce((sum, {quantidade}) => sum + quantidade,0);


  return (
      <span>{totalItens}</span>
  )
}

/*
<div>
<span>items in cart : {cart.length}</span>
<br />
<span>total price : {totalPrice}</span>
<br/>
{cart.map(item => (<h6>{item.name} - {item.price}</h6>))}
</div> */