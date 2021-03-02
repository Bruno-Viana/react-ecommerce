import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { Cart } from './Cart';
import './Navbar.css';
function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);


    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton= () =>{
        if(window.innerHeight>=768){
            setButton(true);
        } else{
            setButton(false);
        }
        if(window.innerHeight>=768 && window.innerWidth<1024){
            setButton(false)
        }

    };

    useEffect(() => {
        showButton();
    }, [])

    window.addEventListener('resize', showButton);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        <img src="..//logo.png" width="70px" height="70px"/>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                           <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>   
                    </div>
                    <div className="cart-icon">
                    <Link to="/carrinho" className="" onClick={closeMobileMenu}>
                        <div className='text-i-e-s'><Cart/></div>
                        <i className="fas fa-shopping-cart"></i> 
                        </Link>                          
                    </div>
                    <ul className={click ? 'nav-menu active': 'nav-menu'}> {/* Adicionar aqui quantos links teram na Nav-bar */}
                        <li className='nav-item'>  
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Home                            
                        </Link>
                        </li>
                        <li className='nav-item'>  
                        <Link to="/produtos" className="nav-links" onClick={closeMobileMenu}>
                            Produtos                            
                        </Link>
                        </li> 
                        <Link to="/carrinho" className="nav-links" onClick={closeMobileMenu}>
                           Carrinho (<Cart/>)
                        </Link>                       
                        <li className='nav-item'>  
                        <Link to="/login" className="nav-links-mobile" onClick={closeMobileMenu}>
                            Minha Conta
                        </Link>
                        </li>
                        <li className='nav-item'>  
                        </li>
                    </ul>
                        {button && <Button buttonStyle='btn--outline'>Minha Conta</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar
