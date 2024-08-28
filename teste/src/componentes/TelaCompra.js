import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './CSS/TelaCompra.css'
function TelaCompra() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  const updateCartUI = (newCart) => {
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const clearCart = () => {
    updateCartUI([]);
  };

  const checkout = () => {
    const email = localStorage.getItem('user-email');

    if (email) {
      emailjs.init("J4AkSLdMlHONcYvtw");

      emailjs.send("service_k5ch88b", "template_hvv3lqc", {
        to: email,
        to_name: "NOME DO USUÁRIO POR EXEMPLO",
        message: JSON.stringify(cart),
        from_name: "teste"
      })
      .then(() => {
        alert("Compra finalizada com sucesso!");
        clearCart();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        window.location.href = "login";
      });
    } else {
      alert("Email não encontrado. Por favor, faça login.");
    }
  };

  const changeQuantity = (index, delta) => {
    const newCart = [...cart];
    const item = newCart[index];

    if (item) {
      item.quantity += delta;

      if (item.quantity <= 0) {
        newCart.splice(index, 1);
      } else {
        item.total = item.price * item.quantity;
      }

      updateCartUI(newCart);
    }
  };

  const total = cart.reduce((sum, item) => sum + item.total, 0);

  return (
    <section className="cart">
      <h1>Carrinho de Compras</h1>
      <div className="cart-content">
        <ul id="cart-items">
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} | Quantidade: 
              <button onClick={() => changeQuantity(index, -1)}>-</button>
              {item.quantity}
              <button onClick={() => changeQuantity(index, 1)}>+</button> | 
              Preço unitário: R$ {item.price.toFixed(2)} | 
              Total: R$ {item.total.toFixed(2)}
            </li>
          ))}
        </ul>
        <p>Total: R$ <span id="cart-total">{total.toFixed(2)}</span></p>
        <button onClick={clearCart}>Limpar Carrinho</button>
        <button onClick={checkout} id="checkout-btn">Finalizar Compra</button>
      </div>
    </section>
  );
}

export default TelaCompra;
