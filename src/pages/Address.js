import React from 'react';
import '../css/address.css';

function Address(){
    return(
        <section className="address">
            <h2 className="addressTitle">Endereço Busch Gardens Tampa Bay</h2>
            <h4 className="addressSubTitle">10165 N McKinley Dr, Tampa, FL 33612, Estados Unidos</h4>
            <p className="addressParagraph">Sabia que o Busch Gardens Tampa Bay disponibiliza transporte gratuito a partir de vários pontos na região de Orlando, Kissimmee e Lake Buena Vista?</p>
            <button className="addressBtn">Saiba mais sobre o transporte gratuito</button>
            <p className="addressParagraph">Caso você prefira nos visitar de carro, aqui estão as direções:</p>
            <p className="addressSpan">Do Norte:</p>
            <p className="addressParagraph">Viaje na direção Sul na I-75 até a saída 265 da Fowler Avenue. Esta saída é a mesma para a Universidade do Sul da Flórida (USF). Vire à direita na saída e você chegará à Fowler Avenue. Prossiga para a direção oeste até a McKinley Drive. Vire à esquerda na McKinley. Prossiga em direção ao sul até o estacionamento do Busch Gardens Tampa Bay.</p>
            <p className="addressSpan">Do Sul:</p>
            <p className="addressParagraph">Viaje na direção Norte na I-75, passando pela interseção da I-4 até a saída 265 para Fowler Avenue. Esta saída é a mesma para a Universidade do Sul da Flórida (USF). Vire à esquerda na saída e você chegará à Fowler Avenue. Prossiga para a direção oeste até a McKinley Drive. Vire à esquerda na McKinley. Prossiga em direção ao sul até o estacionamento do Busch Gardens Tampa Bay.</p>
            <p className="addressSpan">De Orlando:</p>
            <p className="addressParagraph">Viaje na direção Oeste na I-4 até a I-75. Vá para o Norte na I-75 até a saída 265 da Fowler Avenue. Esta saída é a mesma para a Universidade do Sul da Flórida (USF). Vire à esquerda na saída e você chegará à Fowler Avenue. Prossiga para a direção oeste até a McKinley Drive. Vire à esquerda na McKinley. Prossiga em direção ao sul até o estacionamento do Busch Gardens Tampa Bay.</p>
            <p className="addressSpan">De St. Petersburg:</p>
            <p className="addressParagraph">Viaje na direção Norte na I-275 até a saída Fowler Avenue (saída 51; saída 34). Siga para o leste (à direita) na Fowler Avenue e percorra 4 km até a McKinley Drive. Prossiga em direção ao sul até o estacionamento do Busch Gardens Tampa Bay.</p>

        </section>
    );
}   

export default Address;