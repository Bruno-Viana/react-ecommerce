import React, { useRef, useEffect, useContext, useState } from "react";
import {CartContext} from './CartContext';
import './pages/Carrinho.css';

export default function Paypal() {
    const [cart, setCart] = useContext(CartContext);
    const totalPrice = cart.reduce((sum, {quantidade,price}) =>  sum + price * quantidade,0);
    const paypal = useRef();

    const [paid, setPaid]=useState(false);
    const [failed, setFailed]=useState(false);

  useEffect(() => {
    window.paypal
      .Buttons({
        style: {
            shape: 'pill',
            color: 'black',
            layout: 'vertical',
            label: 'pay',
            size: 'responsive',
          },
        createOrder: function(data, actions) {
            return actions.order.create({
                purchase_units:  [
                    {
                    reference_id: "Loja Ecommerce",
                    description: "Loja Ecommerce Mobile",
                      amount:  {
                        currency_code: "BRL",
                        value: totalPrice,
                      },
                    },
                ],
            });
          },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          setPaid(true);
          const tempcart = []
          setCart(tempcart)
        },
        onError: (err) => {
          setFailed(true)
        },
      })
      .render(paypal.current);
  }, []);

  return (
    <>
      <div className="reftest" ref={paypal}></div>
      <div className="StatusText">
        {paid ? (
                  <span>Status:
                  Aprovada. <i className="fas fa-check"></i></span>
              ) : (
                  failed ? (
                      <span>Status:
                          Erro. <i className="fas fa-exclamation-triangle"></i></span>
                  ) : (
                      <span>Status: 
                          Aguardando compra.</span>
              )
          )}
      </div>
    </>
  );
}