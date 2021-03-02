import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
//Páginas:
import Home from './components/pages/Home';
import Produtos from './components/pages/Produtos';
import ProdPage from './components/pages/ProdPage';
import Carrinho from './components/pages/Carrinho';
import Sobre from './components/pages/Sobre';
import Login from './components/pages/Login';
import Page404 from './components/pages/Page404';
//Components
import ScrollTopArrow from './components/ScrollTopArrow';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { CartProvider } from './components/CartContext';

function App() {
  return (
    <>
    <Router>
    <CartProvider>
    <Navbar/>
      <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/produtos' exact component={Produtos} />
          <Route path='/produtos/:id' component={ProdPage} />
          <Route path='/carrinho' component={Carrinho} />
          <Route path='/sobre' component={Sobre} />
          <Route path='/login' component={Login} />
          <Route component={Page404} />
      </Switch>
    <ScrollTopArrow/>
    <Footer/>
    </CartProvider>
    </Router>
    </>
  );
}

export default App;
