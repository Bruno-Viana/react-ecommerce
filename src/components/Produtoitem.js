import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import data from './products.json';
import { BtnCarrinho } from './ButtonCarrinho';
import './ProdutoItem.css';


function ProdutoItem(){ {/* Cria um componente de cada produto no então DB - atualmente json */}

  var itens=data;
  const [visible, setVisible] = useState(12);
  let tempcheck; //Var que verifica quantos itens são mostrados pro usuário
  const CarregarMaisBtn = () =>{
    setVisible(valorPrev => valorPrev+12)
  }

  if(visible>=itens.length){
    tempcheck = itens.length;
  }
  else{
    tempcheck = visible;
    
  }

  function CarregaLoadmoreBtn(tempcheck) {
    if(tempcheck!=itens.length){
    return (
      <button className='carregarmaisBtn' onClick={CarregarMaisBtn}>Carregar Mais</button>
    );}
  }

  return (
    <>
    <div className='wrapper_display'>
    <span className="itens_displayed">Mostrando {tempcheck} itens de {itens.length}.</span>
      <div className='sectionIndProd'>
          {itens.sort((a,b) => b.valor - a.valor).slice(0,visible).map(produto_show =>(
            /* .sort((a,b) => b.valor - a.valor) Sorter, para inverter trocar ordem dos valores*/
              <div className='xsad'>
                <Link className='cards__item__link' to={'/react-ecommerce/produtos/' + produto_show.id}> {/* Passa o id para gerar páginas dinamicamente */}
                  <figure className='cards__item__pic-wrap' data-category={'R$ '+ produto_show.valor}>
                    <img className='cards__item__img' src={produto_show.img}/>
                  </figure>
                    <h5 className='cards__item__text'>{produto_show.nome}</h5>
                    <p className='card--item__item__desc'>{produto_show.desc}</p>
                    <p className='card--item__item__parc'>ou até 12x de {(produto_show.valor/12).toFixed(2)}.</p>
                </Link>
                
              <BtnCarrinho name={produto_show.nome} price={produto_show.valor} img={produto_show.img} id={produto_show.id} />
              </div>
            ))}
              {CarregaLoadmoreBtn(tempcheck)}
      </div>
    </div>
    </>
  );
}
  

export default ProdutoItem;
