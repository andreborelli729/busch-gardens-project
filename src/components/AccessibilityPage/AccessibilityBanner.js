import React from 'react';
import accessibilityBanner from '../../assets/accessibilityBanner.jpg';
import accessibilityImg from '../../assets/accessibility1.jpg';
import '../../css/accessibilityBanner.css';

function AccessibilityBanner(){
    return(
        <section className="accessibilityBanner">
            <img src={accessibilityBanner} alt="pessoas se divertindo em uma montanha russa do parque Busch Gardens Tampa Bay" className="accessibilityBannerImg"></img>
            <h2 className="accessibilityBannerTitle">Acessibilidade</h2>
            <p className="accessibilityBannerParagraph">O Busch Gardens Tampa Bay está comprometido a fornecer acessibilidade para todos os visitantes.</p>
            <h4 className="accessibilityBannerSubtitle">Programa de Acessibilidade nas Atrações</h4>
            <img src={accessibilityImg} alt="pessoas se divertindo em uma montanha russa do parque Busch Gardens Tampa Bay" className="accessibilityImg"></img>
            <p className="accessibilityBannerParagraph">O Programa de Acessibilidade de Atrações (RAP, sigla em inglês) do Busch Gardens foi desenvolvido para permitir que todos os visitantes participem das atividades e aproveitem nosso parque, tendo em mente os requisitos de segurança de nossas atrações.</p>
            <p className="accessibilityBannerParagraph">O programa foi desenvolvido com base na avaliação dos atributos físicos e mentais necessários para participar de cada atração. Todas as instalações e serviços disponíveis para visitantes com mobilidade reduzida podem ser encontrados no nosso guia de acessibilidade. É nosso compromisso fornecer um ambiente agradável e seguro para todos os visitantes.</p>
            <p className="accessibilityBannerParagraph">Para fazer parte do programa RAP, recomendamos visitar o Guest Relations ou o Balcão de Informações do parque. Uma vez inscrito neste programa, uma pulseira de acesso especial será fornecida para acesso rápido às atrações por meio da entrada Quick Queue. A pulseira é válida para o visitante registrado e até três (3) convidados adicionais.</p>
            <p className="accessibilityBannerSpan">Informação para alérgicos</p>
            <p className="accessibilityBannerParagraph">● Nossa equipe foi treinada em gerenciamento de alérgenos em associação com a Food Allergy Research and Education (FARE) para garantir sua segurança. </p>
            <p className="accessibilityBannerParagraph">● Nossos parques oferecem diversas refeições para atender as suas necessidades dietéticas especiais. </p>
            <p className="accessibilityBannerParagraph">● Localizados em nossos Guest Relations e nos principais restaurantes dos parques, temos Cartões de Informação para Alérgicos. Esses cartões contêm informações sobre as refeições e restaurantes do parque.</p>
            <p className="accessibilityBannerSpan">Serviços para deficientes auditivos:</p>
            <p className="accessibilityBannerParagraph">O Busch Gardens Tampa Bay tem o prazer de oferecer diversas opções para nossos visitantes surdos, deficientes auditivos ou que necessitem de assistência adicional para questões de comunicação.</p>
            <p className="accessibilityBannerParagraph">Intérpretes qualificados de linguagem de sinais americana (ASL) estão disponíveis mediante solicitação. Pedimos que solicite este serviço pelo menos 14 dias úteis antes da sua visita.</p>
            <p className="accessibilityBannerParagraph">Entre em contato conosco enviando um e-mail para BGT.GuestInformation@seaworld.com com o assunto “Solicitação de intérprete ASL”</p>
            <p className="accessibilityBannerParagraph">Outras assistências auxiliares estão disponíveis, como roteiros de shows, e podem ser obtidas no Guest Services.</p>

            </section>  );
}

export default AccessibilityBanner;

