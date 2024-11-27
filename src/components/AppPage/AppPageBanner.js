import React from 'react'
import '../../css/appPageBanner.css';
import app1 from '../../assets/app1.jpg';
import app2 from '../../assets/app2.jpg';
import appImg1 from '../../assets/appimg1.jpg';
import appImg2 from '../../assets/appimg2.jpg';
import appImg3 from '../../assets/appimg3.jpg';

function AppPageBanner(){
    return(
        <section className="appPageBanner">
        <h2 className="appPageBannerTitle">Aplicativo oficial Busch Gardens Tampa Bay </h2>
        <p className="appPageBannerParagraph">Baixe o aplicativo do Busch Gardens Tampa Bay e tenha tudo o que você precisa durante o seu dia no parque bem na palma da sua mão!</p>
        <div className="appPageBannerFlexContainer">
       <a href="https://apps.apple.com/app/apple-store/id452815667"><img src={app1} alt="Clique para baixar nosso aplicativo na app store" className="appPageBannerImg1"></img></a> 
        <a href="https://play.google.com/store/apps/details?id=com.buschgardens.&referrer=&utm_source=BGT_Website&utm_medium=GooglePlayStore_AppBadge&utm_campaign=_App_Page"><img src={app2} alt="Clique para baixar nosso aplicativo na play store" className="appPageBannerImg1"></img></a> 
        </div>
        <div className="appPageBannerGridContainer">
        <div className="appPageBannerGrid1">
        
        <h4 className="appPageBannerSubtitle">Planejamento</h4>
        <ul className="appPageBannerList">
            <li className="appPageBannerItem">• Planeje o seu dia no Busch Gardens Tampa Bay</li>
            <li className="appPageBannerItem">• Confira o horário de funcionamento do parque</li>
            <li className="appPageBannerItem">• Descubra tudo o que você pode fazer! Experiências com animais, apresentações, atrações, eventos e restaurantes</li>
            <li className="appPageBannerItem">• Veja os horários das nossas apresentações</li>
            <li className="appPageBannerItem">• Faça um upgrade da sua visita com Quick Queue, All-Day Dininig Deal ou assentos reservados nas apresentações</li>

        
        
        </ul>
        </div>
        <div className="appPageBannerGrid2">
        <img src={appImg1} alt="imagem ilustrativa" className="appPageBannerImg2"></img>

        </div>
        <div classNAme="appPageBannerGrid3">

        <img src={appImg2} alt="imagem ilustrativa" className="appPageBannerImg2"></img>
        </div>
        <div className="appPageBannerGrid4">

        <h4 className="appPageBannerSubtitle">Minha visita</h4>
        <ul className="appPageBannerList">
            <li className="appPageBannerItem">• Quando você compra seus ingressos diretamente pelo site do SeaWorld Orlando, seus e-tickets ficarão disponíveis no aplicativo do celular (faça o login com o mesmo cadastro que utilizou ao adquirir os ingressos)</li>
            <li className="appPageBannerItem">• Veja suas compras adicionais e tenha acesso aos códigos de barras</li>
               
        </ul>
        </div>
        <div className="appPageBannerGrid5">

        <h4 className="appPageBannerSubtitle">Mapa</h4>
        <ul className="appPageBannerList">
            <li className="appPageBannerItem">• Explore nosso mapa interativo para checar a sua localização e as atrações mais próximas</li>
            <li className="appPageBannerItem">• Encontre o caminho para chegar mais rápido a uma determinada atração ou apresentação</li>
            <li className="appPageBannerItem">• Filtre que tipo de experiência deseja buscar, incluindo atrações, apresentações e experiências com animais</li>
            <li className="appPageBannerItem">• Localize o banheiro mais próximo, incluindo banheiros para famílias;</li>
            <li className="appPageBannerItem">• Procure o nome da atração ou outro ponto de interesse para poder chegar onde deseja</li>

        
        
        </ul>
        </div>
        <div className="appPageBannerGrid6">
        <img src={appImg3} alt="imagem ilustrativa" className="appPageBannerImg2"></img>

        </div>

        </div>

    </section>
    );
}

export default AppPageBanner;