import React, { useState, useEffect } from 'react';
import './CSS/PainelAdm.css';

function PainelAdm() {
  const [imagem, setImagem] = useState('');
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const savedProdutos = JSON.parse(localStorage.getItem('produtos')) || [];
    setProdutos(savedProdutos);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProduto = { imagem, nome, preco };
    const newProdutos = [...produtos, newProduto];
    setProdutos(newProdutos);
    localStorage.setItem('produtos', JSON.stringify(newProdutos));
    setImagem('');
    setNome('');
    setPreco('');
  };

  const handleDelete = (index) => {
    const newProdutos = produtos.filter((_, i) => i !== index);
    setProdutos(newProdutos);
    localStorage.setItem('produtos', JSON.stringify(newProdutos));
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor="imagem">URL da Imagem:</label>
        <input 
          type="text" 
          id="imagem" 
          value={imagem} 
          onChange={(e) => setImagem(e.target.value)} 
          required 
        />
        
        <label htmlFor="nome">Nome do Produto:</label>
        <input 
          type="text" 
          id="nome" 
          value={nome} 
          onChange={(e) => setNome(e.target.value)} 
          required 
        />
        
        <label htmlFor="preco">Preço:</label>
        <input 
          type="text" 
          id="preco" 
          value={preco} 
          onChange={(e) => setPreco(e.target.value)} 
          required 
        />
        
        <button type="submit">Adicionar Produto</button>
      </form>
      
      <div id="produtosList">
        <h2>Produtos Adicionados</h2>
        <ul id="produtosUl">
          {produtos.map((produto, index) => (
            <li key={index}>
              <img src={produto.imagem} alt={produto.nome} style={{ width: '100px', height: '100px' }} />
              <p>{produto.nome} - R$ {produto.preco}</p>
              <button onClick={() => handleDelete(index)}>Excluir</button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default PainelAdm;
