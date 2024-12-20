import React from 'react';
import '../css/page404.css';
import { Link } from 'react-router-dom';
import error from '../assets/404.png';

function Page404(){
    return(
<section className="404Page">
    <div className="page404Container1">
    <img src={error} alt="error 404, this page does not exit. Click on the buttom bellow to go back Home Page" className="errorImg"></img>
         <h2 className="errorTitle">Page not found.</h2>
         <Link to="/" ><button className="page404Btn">Voltar para a página inicial</button></Link>
            </div>
            
</section>

    );
}


export default Page404;