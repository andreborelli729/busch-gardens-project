import React from 'react';
import Address from './pages/Address.js';
import Home from './pages/Home.js';
import Map from './pages/Map.js';
import Accessibility from './pages/Accessibility.js';
import Cashless from './pages/Cashless.js';
import Policy from './pages/Policy.js';
import Weather from './pages/Weather.js';
import AppPage from './pages/AppPage.js';
import Transport from './pages/Transport.js';
import Page404 from './pages/Page404.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import Store from './pages/Store.js';
import Presentation from './pages/Presentation.js';
import Restaurant from './pages/Restaurant.js';
import Experience from './pages/Experience.js';
import Attraction from './pages/Attraction.js';

function MyRoutes(){
    return(
        <Router>
            <Navbar/>
           <Routes>
           <Route exact path="/" element={<Home/>}></Route>
           <Route path="/endereco" element={<Address/>}></Route>
           <Route path="/mapa" element={<Map/>}></Route>
           <Route path="/acessibilidade" element={<Accessibility/>}></Route>
           <Route path="/cashless" element={<Cashless/>}></Route>
           <Route path="/garantia-weather-or-not" element={<Weather/>}></Route> 
           <Route path="/aplicativo" element={<AppPage/>}></Route>
           <Route path="/transporte-gratuito" element={<Transport/>}></Route>
           <Route path="/politica-do-parque" element={<Policy/>}></Route>
           <Route path="/lojas" element={<Store/>}></Route>
           <Route path="/apresentacoes" element={<Presentation/>}></Route>
           <Route path="/restaurantes" element={<Restaurant/>}></Route>
           <Route path="/experiencias" element={<Experience/>}></Route>
           <Route path="/atracoes" element={<Attraction/>}></Route>




           <Route path="*" element={<Page404/>}></Route>






            </Routes>
            <Footer/>
        </Router>
    );
}

export default MyRoutes;    