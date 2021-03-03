<img src="https://img.shields.io/static/v1?label=react&message=framework&color=blue&style=for-the-badge&logo=REACT"/> <img src="https://img.shields.io/static/v1?label=nodejs&message=framework&color=green&style=for-the-badge&logo=javascript"/>


## :dart: Live Demo: https://bruno-viana.github.io/react-ecommerce/



### Desktop:
<div align="center">
    <img src="https://raw.githubusercontent.com/Bruno-Viana/react-ecommerce/master/public/samples/herosection.png" width="400px"</img>
    <img src="https://github.com/Bruno-Viana/react-ecommerce/blob/master/public/samples/products_footer.png?raw=true" width="400px"</img>
</div>


### Mobile:
<div align="center">
    <img src="https://github.com/Bruno-Viana/react-ecommerce/blob/master/public/samples/mobile_hero.png?raw=true" width="267px" height="450px"></img>
    <img src="https://github.com/Bruno-Viana/react-ecommerce/blob/master/public/samples/mobile_products.png?raw=true" width="267px" height="450px"></img>
    <img src="https://github.com/Bruno-Viana/react-ecommerce/blob/master/public/samples/mobile_menu.png?raw=true" width="267px" height="450px"></img>
</div>



# :pushpin: Ecommerce feito com front em React e backend em Nodejs

@Sob licença Apache 2.0.

# Conceitos do React Utilizados:
<p align="justify">Rendering condicional com forte foco nos Components, Routers, Providers, Hooks (State, Context, Ref e Effect) - Não foi utilizado Redux mas pode ser uma opção viável mas necessitará refatoração do código fonte.</p> 

#  :star: Features:
* Responsivo - Todos os componentes - Navbar inclui um menu hambúrguer.
* Componentes baseadas em hierarquia.
* Paginação e criação de páginas para produtos dinâmicas.
* Carrinho 100% funcional com Storage e utilidades. <br/>
* :warning: OBS: Autenticação com FireBase NÃO está presente neste repositório!
* :warning: OBS²: Esta versão tem os produtos em um Json local para facilitar a criação de uma página demo, originalmente utilizado MongoDB.


# :dollar: Gateway de Pagamento

Pra esse projeto eu usei o PayPal. Diferentemente de outros gateways ele NÂO possui um SDK, logo será necessário mudar a sua import pelo JS encontrado no HTML:

"https://www.paypal.com/sdk/js?currency=BRL&client-id=SEUID-AQUI&locale=pt_BR&buyer-country=BR"

Casos de internacionalização ou específicos em relação ao layout e formas de pagamento por favor ler a documentação em: https://www.paypal.com/br/webapps/mpp/accept-payments-online


# :memo: Utilizando em sua máquina:
Clone o repositório:
`git clone https://github.com/Bruno-Viana/react-ecommerce.git`

Instale o react-router-dom com yarn ou npm - em caso de dúvidas leia: https://reactrouter.com/web/guides/quick-start
Entre no diretório da aplicação:
`cd my-app`


Para iniciar a aplicação React:
 `npm start`
 
 O React irá iniciar a webapp em [http://localhost:3000/react-ecommerce/](http://localhost:3000/react-ecommerce/)

# :trophy: Tudo pronto!
