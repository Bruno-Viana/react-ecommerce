import React from 'react';
import {Link} from 'react-router-dom';
import '../pages/Login.css';

/*
React + Fetch: GET, PUT, DELETE
React + Axios: GET, POST
*/

function LoginPage(){
  return (
    <div className="wrapper_form_page">
      <h1 className="demoHeader">//Desativado na demo</h1>
      <form action="/login" className="login-form">
      <p className="login-text">
        <span className="fa-stack fa-lg">
          <i className="fa fa-circle fa-stack-2x"></i>
          <i className="fa fa-lock fa-stack-1x"></i>
        </span>
      </p>
      <input type="email" className="login-username" autofocus="true" required="true" placeholder="Email" />
      <input type="password" className="login-password" required="true" placeholder="Password" />
      <input type="submit" name="Login" value="Login" class="login-submit" />
      </form>
      <h1>OU</h1>
      <Link to='/sign-up' className='btn-signup'>
      <button className="criar__conta">Crie uma conta</button>
      </Link>
      <a href="/recuperar" className="login-forgot-pass">Esqueci a minha senha</a>
  </div>
  );
};

export default LoginPage;