import React from 'react';
import '../css/transport.css';
import transportBanner from '../assets/transportBanner.jpg';
import transportLogo1 from '../assets/transportLogo1.jpg';
import transportLogo2 from '../assets/transportLogo2.jpg';
import transportLogo3 from '../assets/transportLogo3.jpg';
import transportLogo4 from '../assets/transportLogo4.jpg';
import transportLogo5 from '../assets/transportLogo5.jpg';
import underline from '../assets/underline.jpg';

function Transport(){
    return(
        <section className="transport">
            <img src={transportBanner} alt="Imagem Informativa com a descrição: Shuttle Grátis de Orlando para curtir o Busch Gardens em Tampa" className="transportBanner"></img>
            <p className="transportParagraph">O Busch Gardens Tampa Bay está situado a aproximadamente 130 Km de Orlando e oferece transporte gratuito a todos os visitantes. É necessário fazer reserva.</p>
            <p className="transportParagraph">Os pontos de saída e chegada são os seguintes:</p>
            <p className="transportParagraph">● SeaWorld Orlando (perto do ponto de ônibus e táxi)</p>
            <p className="transportParagraph">● ICON Park, 8350 Universal Blvd - 8445 International Drive (no coração da International Drive)</p>
            <p className="transportParagraph">● Publix, 8145 Vineland Avenue, Lake Buena Vista (perto do Premium Outlets – área de Lake Buena Vista) </p>
            <p className="transportParagraph">● Old Town Entertainment District, 5770 W. Irlo Bronson Memorial Hwy</p>
            <p className="transportParagraph">● Doubletree Orlando by Hilton na entrada do Universal Orlando, 5780 Major Blvd, Orlando, FL</p>
            <p className="transportParagraph">● Maingate Lakeside Resort - 7769 W Irlo Bronson Memorial Hwy, Kissimmee </p>
            <p className="transportParagraph">A programação do serviço varia ao longo do ano e está sujeita a alterações. Apenas para fins de orientação, a saída na área de Orlando se dá entre 8h30 e 9h30 - dependendo da localização.</p>
            <p className="transportParagraph">A viagem de volta do Busch Gardens Tampa Bay para Orlando dependerá do horário de fechamento do parque e também varia ao longo do ano.</p>
            <p className="transportParagraph">Este serviço é gratuito para todos os visitantes com um ingresso válido em mãos.</p>
            <p className="transportParagraph">Os detalhes compartilhados estão sujeitos a alterações. Paradas de ônibus, rotas e horários devem ser confirmados previamente no site de reserva.</p>
            <p className="transportParagraph">Para fazer sua reserva de assentos no Shuttle Express, acesse:</p>
            <button className="transportBtn">Reserva Shuttle Express</button>
            <img src={underline} className="transportUnderline"></img>
            <div className="transportLogoContainer">
            <img src={transportLogo1} alt="logo Sea World Orlando" className="transportLogo1"></img>
            <img src={transportLogo2} alt="logo Busch Gardens Tampa Bay Flórida" className="transportLogo2"></img>
            <img src={transportLogo3} alt="logo Aquatica Orlando" className="transportLogo3"></img>
            <img src={transportLogo4} alt="logo Discovery Cove Orlando" className="transportLogo4"></img>
            <img src={transportLogo5} alt="logo Adventure Island Tampa Bay" className="transportLogo5"></img>
        </div>
        
        </section>
    );
}

export default Transport;
