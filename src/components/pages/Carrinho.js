import React, {useContext,useState} from 'react';
import {CartContext} from '../CartContext';
import '../pages/Carrinho.css';
import Paypal from '../Paypal';

export function Carrinho() {
  const [checkout, setCheckOut] = useState(true);
  const [cart, setCart] = useContext(CartContext);
  const totalPrice = cart.reduce((sum, {quantidade,price}) =>  sum + price * quantidade,0);
  const totalItens = cart.reduce((sum, {quantidade}) => sum + quantidade,0);

  
  function AdicionaItem(item){
    const tempcart = [...cart]
    tempcart.find((tempitem) => tempitem.id === item.id).quantidade=item.quantidade+1;
    setCart(tempcart)
  }



  function RemoveItem(item){
    const tempcart = [...cart]
    if(item.quantidade>1){
    tempcart.find((tempitem) => tempitem.id === item.id).quantidade=item.quantidade-1;
    setCart(tempcart)
    }else{
      const anothertempCart = tempcart.filter((itemtemp) => itemtemp !== item);
      setCart(anothertempCart)
    }
  }

  function DeletaItem(item){
    const newCart = cart.filter((itemtemp) => itemtemp !== item);
    setCart(newCart);
  }


  

  return (
    <div className="wrapper_carrinho">
      <h1 className="header_itens">Total de itens: {totalItens}</h1>
      <hr/><br/>
          {cart.map(item => (
              <div className="wrapper_item_carrinho">
                <div className="left_column">
                <img src ={item.img} alt={item.name} className="img_carrinho"></img>
                </div>
                <div className="right_column">
                  <h1 className="nome_prod">{item.name}</h1>
                  <p className="quant_prod">x{item.quantidade}</p>
                  <p className="valor_prod">R$ {item.price} cada.</p>
                  <button className="removeitemBtn" onClick={() => AdicionaItem(item)}><i className="far fa-plus-square"></i></button>
                  <button className="removeitemBtn" onClick={() => RemoveItem(item)}><i className="far fa-minus-square"></i></button>
                  <button className="removeitemBtn" onClick={() => DeletaItem(item)}><i className="far fa-trash-alt"></i></button>
                </div>
                <hr/><br/><br/>
              </div>            
          ))}
      <h2 className="valor_total_pedido">Valor total: R$ {totalPrice.toFixed(2)}</h2>
      <div className="paypalBtns">
      <Paypal/>
      </div>
    </div>

  )
}


export default Carrinho;