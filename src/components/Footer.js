import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <>
    <div className="footer">
        <div className="about">
            <h6>Sobre</h6>
            <p className="text-justify">Site de ecommerce criado por <a className="github" href="https://github.com/Bruno-Viana" target="_blank">Bruno Viana</a> em Q1 de 2021.
            <br/> Ferramentas utilizadas no projeto: <br/> <i class="fab fa-react"></i> <i class="fab fa-node-js"></i> <i class="fab fa-cc-paypal"></i></p>
        </div>
        <div className="test">
            <h6>Sandbox</h6>
            <p className="text-justify-test">Para testar o pagamento utilize a conta do PayPal: <br/>
            E-Mail: sb-picaq5245530@business.example.com <br/>
            Senha: Mn!Z0506 </p>
        </div>
      <div className="social">
            <ul className="social-icons">
            <h6>Social</h6>
              <a className="github" href="https://github.com/Bruno-Viana" target="_blank"><i className="fab fa-github"></i></a>
            </ul>
          </div>
    </div>
    </>
  );
}

export default Footer;