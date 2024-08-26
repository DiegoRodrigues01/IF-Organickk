import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import HomePage from "./componentes/HomePage";
import Login from "./componentes/Login";
import Adm from "./componentes/Adm";
import Cadastro from "./componentes/Cadastro";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import TelaCompra from "./componentes/TelaCompra";
import PainelAdm from "./componentes/PainelAdm";
import Sobre from "./componentes/Sobre";
  
function Router ()
{
    return <BrowserRouter> 
            <Header/>
           <Routes>
                <Route element={ <HomePage/> } path="/" />
                <Route element={ <Login/> } path="/login" />
                <Route element={ <Cadastro/> } path="/cadastro" />
                <Route element={ <TelaCompra/> } path="/telacompra" />
                <Route element={ <Adm/> } path="/adm" />
                <Route element={ <PainelAdm/> } path="/telaadm" />
                <Route element={ <Sobre/> } path="/sobre" />

             </Routes>
             <Footer/>
    </BrowserRouter>
}
export default Router;