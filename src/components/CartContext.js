import React, {useState, useEffect} from 'react';

export const CartContext = React.createContext();



export const CartProvider = (props) => {
  //Use effects para carregar os dados do carrinho entre refreshes
  useEffect(() => {
    const data = localStorage.getItem('CarrinhoSave');
    if(data){
      setCart(JSON.parse(data))
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('CarrinhoSave', JSON.stringify(cart))
  })


  const [cart, setCart] = useState([]);
  return (
    <CartContext.Provider value={[cart, setCart]}>
      {props.children}
    </CartContext.Provider>
  )
}