import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import './CSS/Header.css';

const ProductList = () => {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        const produtosSalvos = JSON.parse(localStorage.getItem('produtos')) || [];
        setProdutos(produtosSalvos);
        updateCartCount(); // Atualiza a contagem do carrinho
        updateCartUI(); // Atualiza a UI do carrinho
    }, []);

    const addToCart = (name, price) => {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let item = cart.find(item => item.name === name);

        if (item) {
            item.quantity += 1;
            item.total = item.price * item.quantity;
        } else {
            cart.push({ name: name, price: price, quantity: 1, total: price });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        updateCartUI();
    };

    const updateCartCount = () => {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        document.getElementById('cart-count').textContent = cart.reduce((total, item) => total + item.quantity, 0);
    };

    const updateCartUI = () => {
        const cartItems = document.getElementById('cart-items');
        const cartTotal = document.getElementById('cart-total');
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let total = 0;

        if (cartItems) {
            cartItems.innerHTML = '';

            cart.forEach(item => {
                const listItem = document.createElement('li');
                listItem.textContent = `${item.name} | Quantidade: ${item.quantity} | Preço unitário: R$ ${item.price.toFixed(2)} | Total: R$ ${item.total.toFixed(2)}`;
                cartItems.appendChild(listItem);
                total += item.total;
            });

            cartTotal.textContent = total.toFixed(2);
        }
    };

    return (
        <div className="product"> {/* Certifique-se de que essa classe esteja correta */}
            {produtos.length > 0 ? (
                produtos.map((produto, index) => (
                    <ProductItem key={index} produto={produto} addToCart={addToCart} />
                ))
            ) : (
                <p>Nenhum produto disponível.</p>
            )}
        </div>
    );
};

export default ProductList;
