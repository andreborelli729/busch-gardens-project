import React from 'react';
import '../css/weather.css';
import weather from '../assets/weather.jpg';

function Weather(){
    return(
        <section className="weather">
            <h2 className="weatherTitle">Weather-or-Not: o mau tempo não irá atrapalhar a sua diversão!</h2>
            <div className="weatherGridContainer">
            <div className="weatherTextContainer1">
                <p className="weatherParagraph2">O Busch Gardens Tampa Bay geralmente permanece aberto mesmo quando o tempo não colabora, e temos muitas maneiras incríveis para você e sua família se divertirem enquanto isso. Mesmo assim, sabemos que diferentes condições climáticas podem atrapalhar o seu dia de diversão conosco.</p>
                <p className="weatherParagraph2">Não se preocupe, é aí que a nossa garantia Weather-or-Not entra em ação. Nesses casos, você pode receber um ingresso para retornar ao parque por nossa conta!</p>
                </div>

                <div className="weatherImgContainer">
                <img src={weather} alt="Imagem com texto em inglês que significa: Busch Gardens, com tempo ou não você assegurado" className="weatherImg"></img>
                </div>
                </div>
                <p className="weatherParagraph">A sua visita está protegida durante o ano inteiro. Nós garantimos novos ingressos para que você e sua família possam retornar e continuar a diversão de onde ela parou em casos de chuva, relâmpagos, calor extremo, ventania, neve, granizo e muito mais.</p>
        <p className="weatherSpan">Por exemplo, se durante a sua visita:</p>
        <ul className="weatherList">
            <li className="weatherItem">● O mau tempo causar o fechamento antecipado ou impactar negativamente no horário de operação do parque</li>
            <li className="weatherItem">● As atrações ficarem fechadas por mais de 60 minutos devido a relâmpagos, ventanias fortes, calor extremo, chuva ou neve</li>
            <li className="weatherItem">● As temperaturas atingirem 43,3°C (110°F) </li>

        </ul>
        <p className="weatherParagraph">Nestes casos, pare no Guest Relations do parque ou preencha o formulário abaixo com as informações da sua visita para solicitar seus ingressos de retorno!*</p>
        <button className="weatherBtn">Preencher formulário para receber novos ingressos</button>
        <p className="weatherParagraph">*Você precisará dos seus ingressos originais ou do número do pedido dos seus ingressos! O formulário deve ser preenchido dentro de uma semana após a sua visita ao parque. </p>
        <p className="weatherSpan">Eligibilidade</p>
        <ul className="weatherList">
            <li className="weatherItem">● Os seguintes casos não são elegíveis para receber ingressos de retorno pela garantia Weather or Not: Passes Anuais; Ingressos com duração de 14 dias; Pacotes do Discovery Cove</li>
            <li className="weatherItem">● Os seguintes casos podem não ser elegíveis e devem ser verificados no Guest Relations: Ingressos promocionais/com descontos ou ingressos para mais de um dia</li>
            <li className="weatherItem">● A garantia Weather-or-Not não se aplica ao estacionamento ou a produtos/experiências adicionais</li>

        </ul>

        
        
        </section>
    );
}


export default Weather;