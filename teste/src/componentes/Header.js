import React from 'react';
import './CSS/Header.css';
import MenuOpcao from './MenuOpcao';
import { Link } from 'react-router-dom';

const Header = () => {
    const toggleCart = () => {
        const cart = document.getElementById('cart');
        if (cart) {
            cart.classList.toggle('show');
        }
    };

    return (
     <React.Fragment>
           <header className="caixa">
            <div className="logo">
                <h2><a href="/">IF </a><span style={{ color: '#c2fed4' }}><a href="/">ORGANICK</a></span></h2>
                <i className="material-symbols-outlined">yard</i>
            </div>
            <div className="Input">
                <input type="text" placeholder="Encontre seu produto" />
                <i className="material-symbols-outlined" id="search">search</i>
            </div>
            <section className="menu-login">
                <div id="carrinho" onClick={toggleCart}>
                    <i className="material-symbols-outlined"><Link to="/login">shopping_cart</Link></i>
                    <span id="cart-count">0</span>
                </div>
                <ul>
                    <li style={{ listStyle: 'none' }}><Link to="/cadastro">Criar Cadastro</Link></li>
                    <li style={{ listStyle: 'none' }}><Link to="/login">Acesse Seu Login</Link></li> 
                </ul>
            </section>
        </header>
        <MenuOpcao/>
        </React.Fragment>
    );
};

export default Header;
