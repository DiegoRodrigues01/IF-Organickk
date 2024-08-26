import React from 'react';
import './CSS/Header.css';

const ProductItem = ({ produto, addToCart }) => {
    return (
        <div className="item">
            <div className="liten">
                <ul>
                    <li className="imagem"><img src={produto.imagem} alt={produto.nome} /></li>
                    <li>{produto.nome}</li>
                    <li>R$ {parseFloat(produto.preco).toFixed(2)}</li>
                </ul>
            </div>
            <div className="btn">
                <button onClick={() => addToCart(produto.nome, parseFloat(produto.preco))}>Comprar</button>
            </div>
        </div>
    );
};

export default ProductItem;
