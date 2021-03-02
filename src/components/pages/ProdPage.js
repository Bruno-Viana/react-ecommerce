import React from 'react';
import data from '../products.json';
import '../pages/ProdPage.css'
import Page404 from './Page404';
import { BtnCarrinho } from '../ButtonCarrinho';


function ProdPage(props){
    /* Testes de .sort com slice
        const propcarrier = props.match.params.id;
        console.log('Propcarrier: ' , propcarrier)
        
        console.log(data.sort((a,b) => b.valor - a.valor).slice(0, 31).map(dataItem =>
            dataItem.id
            ))
        console.log(data.sort((a,b) => a.id - b.id).slice(propcarrier-1, propcarrier).map(dataItem =>
            dataItem.id
            ))
    */
   if(props.match.params.id<=data.length && props.match.params.id>0){ //404 handler se item não existir
    return(   
    <>
    {data.sort((a,b) => a.id - b.id).slice(props.match.params.id-1, props.match.params.id).map(dataItem =>( //Necessário inverter para ordem crescente de IDs para evitar bugs
        //Se parâmetro do id confere seleciona a slice do id atual
        <div className="specs">
            <div className="specs-card">
                <div className="left-column">
                    <img className="spec-img" src={dataItem.img} alt={dataItem.nome}/>
                </div>
                <div className="right-column">
                    <div className="spec-desc">
                        <h1>{dataItem.nome}</h1>
                        <br/>
                        <p>{dataItem.valor} R$</p>
                            <div className="parcelado">
                                <p>ou até 12x de {(dataItem.valor/12).toFixed(2)}</p> 
                            </div>
                        <br/>
                        <BtnCarrinho name={dataItem.nome} price={dataItem.valor} img={dataItem.img} id={dataItem.id}  />
                    </div>
                    <div className="spec-specs">
                    <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in porttitor dolor. Nulla in eros molestie, pharetra velit et, lacinia quam. Integer nec aliquet turpis, in imperdiet mi. Morbi at molestie est. Duis vitae lectus in leo mattis commodo. Donec aliquet placerat pellentesque. Curabitur eleifend dictum vestibulum. Phasellus mattis libero sed dui mollis dignissim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer et viverra ante, in aliquam nisi. Integer at elit est. <br/>

Nulla sit amet vestibulum sapien. Vestibulum id lacinia turpis, nec tempus diam. Etiam nec risus sollicitudin neque scelerisque dapibus. Nullam quis consequat sapien. In vitae dui tellus. In vitae erat ut risus vestibulum facilisis. Aenean augue lacus, laoreet in nisl sit amet, commodo vehicula leo. Vivamus quis eleifend arcu. Sed pretium dictum lobortis. Aenean pellentesque sodales metus, in dictum metus hendrerit in. Etiam egestas ultricies viverra. Vivamus at volutpat diam, at tincidunt enim. Quisque pharetra sit amet sapien in volutpat.<br/>

Sed consectetur urna non lectus bibendum tempus non sodales diam. Vestibulum aliquet sem nunc, a sodales felis volutpat eget. Aliquam quis ex eu massa porttitor sollicitudin. Proin dignissim sapien turpis, et molestie lacus lobortis a. Duis dignissim dolor arcu, eu imperdiet ante aliquam at. Proin eu hendrerit nunc. Fusce eu nisl scelerisque, condimentum turpis non, pulvinar quam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in porttitor dolor. Nulla in eros molestie, pharetra velit et, lacinia quam. Integer nec aliquet turpis, in imperdiet mi. Morbi at molestie est. Duis vitae lectus in leo mattis commodo. Donec aliquet placerat pellentesque. Curabitur eleifend dictum vestibulum. Phasellus mattis libero sed dui mollis dignissim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer et viverra ante, in aliquam nisi. Integer at elit est.<br/>

Nulla sit amet vestibulum sapien. Vestibulum id lacinia turpis, nec tempus diam. Etiam nec risus sollicitudin neque scelerisque dapibus. Nullam quis consequat sapien. In vitae dui tellus. In vitae erat ut risus vestibulum facilisis. Aenean augue lacus, laoreet in nisl sit amet, commodo vehicula leo. Vivamus quis eleifend arcu. Sed pretium dictum lobortis. Aenean pellentesque sodales metus, in dictum metus hendrerit in. Etiam egestas ultricies viverra. Vivamus at volutpat diam, at tincidunt enim. Quisque pharetra sit amet sapien in volutpat.<br/>

Sed consectetur urna non lectus bibendum tempus non sodales diam. Vestibulum aliquet sem nunc, a sodales felis volutpat eget. Aliquam quis ex eu massa porttitor sollicitudin. Proin dignissim sapien turpis, et molestie lacus lobortis a. Duis dignissim dolor arcu, eu imperdiet ante aliquam at. Proin eu hendrerit nunc. Fusce eu nisl scelerisque, condimentum turpis non, pulvinar quam.
                    </span>
                    </div>
                </div>
            </div>
        </div>
    ))}
    </>
    )} //Fim id parametro do id == true
    else{
        return(
            <Page404/>
        )
    }
}

export default ProdPage