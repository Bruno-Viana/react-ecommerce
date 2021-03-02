import React, {useContext} from 'react';
import { CartContext } from './CartContext';
import './ButtonCarrinho.css'

export const BtnCarrinho = (props) => {
  const [cart, setCart] = useContext(CartContext);

  const AdcCarrinho = () => {
    let itemInCart = cart.find(item => props.id === item.id);
    let newCarttemp = [...cart];
    if(itemInCart){
      itemInCart.quantidade++;
    } else{
      itemInCart = {
        ...props,
        quantidade: 1,
      }
      newCarttemp.push(itemInCart);
    }
      setCart(newCarttemp);
    /* State antigo, salvar para features futuras onde: Necessário selecionar apenas alguns elementos do meu obj.
    const qty = cart.filter((item) => item.id == props.id);
    const produtotoCart = {key:props.id, id:props.id, name: props.name, price: props.price, img: props.img, quantidade: qty.length+1};
    setCart(currentState => [...currentState, produtotoCart]);*/
    
  }
  
  return(
    <div>  
      <button className="btnAdcCart" onClick={AdcCarrinho}><i className="fas fa-cart-plus"> Adicionar</i></button>
    </div>
    );
}


