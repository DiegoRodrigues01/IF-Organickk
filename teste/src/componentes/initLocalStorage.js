const produtos = [
    {
        "imagem": "https://www.comidanamesa.com.br/wp-content/uploads/2018/11/arroz.jpg",
        "nome": "Arroz 5KG",
        "preco": 23.00
    },
    {
        "imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbzdzDAqFZqKqqh6kO5yLfgqGKsLXODDBEPGFEA8wM6A&s",
        "nome": "Feijão",
        "preco": 12.19
    },
    {
        "imagem": "https://cdn.awsli.com.br/300x300/305/305913/produto/10293630/maca-a1b41a96.jpg",
        "nome": "Maça",
        "preco": 5.99
    },
    {
        "imagem": "https://acdn.mitiendanube.com/stores/001/194/977/products/brocolis-ramoso1-67d7ced9fbd9a00dcc15904232842584-640-0.jpg",
        "nome": "Brócolis",
        "preco": 10.00
    }
];

localStorage.setItem('produtos', JSON.stringify(produtos));
