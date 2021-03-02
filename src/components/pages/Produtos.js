import './Produtos.css';
import ProdutoItem from '../Produtoitem';



function Produtos(){
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <ProdutoItem/>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Produtos;