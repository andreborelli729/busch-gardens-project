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


function MyRoutes(){
    return(
        <Router>
           <Routes>
           <Route exact path="/" element={<Home/>}></Route>
           <Route path="/endereço" element={<Address/>}></Route>
           <Route path="/mapa" element={<Map/>}></Route>
           <Route path="/acessibilidade" element={<Accessibility/>}></Route>
           <Route path="/cashless" element={<Cashless/>}></Route>
           <Route path="/garantia-weather-or-not" element={<Weather/>}></Route> 
           <Route path="/aplicativo" element={<AppPage/>}></Route>
           <Route path="/transporte-gratuito" element={<Transport/>}></Route>
           <Route path="/politica-do-parque" element={<Policy/>}></Route>
           <Route path="*" element={<Page404/>}></Route>






            </Routes>
        </Router>
    );
}

export default MyRoutes;    