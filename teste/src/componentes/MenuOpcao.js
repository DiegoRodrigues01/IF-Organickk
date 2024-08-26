import React from 'react';
import { Link } from 'react-router-dom';
//import './MenuOpcao.css';

const MenuOpcao = () => {
    return (
        <section className="menu-opcao">
            <ul>
                <li><a href="pagina_inicial.html">Categorias</a></li>
                <li><a href="pagina_inicial.html">Top vendas</a></li>
                <li><a href="pagina_inicial.html">Novidades</a></li>
                <li><a href="pagina_inicial.html">Produtos de Merceria</a></li>
                <li><Link to="sobre">Sobre</Link></li>
            </ul>
        </section>
    );
};

export default MenuOpcao;
