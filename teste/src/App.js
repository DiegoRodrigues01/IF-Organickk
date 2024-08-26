import React from 'react';
import Header from './componentes/Header';
import MenuOpcao from './componentes/MenuOpcao';
import ProductList from './componentes/ProductList';
import Footer from './componentes/Footer';
import Cadastro from './componentes/Cadastro';
import Login from './componentes/Login';
import TelaCompra from './componentes/TelaCompra';
import PainelAdm from './componentes/PainelAdm';
import Sobre from './componentes/Sobre';
import { Outlet, Route } from 'react-router-dom';
import Routes from './Routes';

function App() {
    return (
       /* <div>
            <Header />
            <MenuOpcao />
            <ProductList />
            <Cadastro />
            <Login />
            <TelaCompra />
            <PainelAdm />
            <Sobre />
            <Footer />
        </div>*/
        <div>
            <Routes/>
        </div>
    );
}

export default App;
