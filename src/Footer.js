import React from 'react';
import footerImg from './assets/footerImg.jpg';
import './css/footer.css';

function Footer(){
    return(
        <footer className="footer">
            <img src={footerImg} alt="logo United Parks & Resorts" className="footerImg"></img>
        </footer>
    );
}


export default Footer;