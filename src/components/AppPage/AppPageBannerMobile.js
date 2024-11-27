import React from 'react';
import '../../css/appPageBannerMobile.css';
import app1 from '../../assets/app1.jpg';
import app2 from '../../assets/app2.jpg';
import appImg1 from '../../assets/appimg1.jpg';
import appImg2 from '../../assets/appimg2.jpg';
import appImg3 from '../../assets/appimg3.jpg';

function AppPageBannerMobile(){
    return(
        <section className="appPageBannerMobile">
            <h2 className="appPageBannerTitleMobile">Aplicativo oficial Busch Gardens Tampa Bay </h2>
            <p className="appPageBannerParagraphMobile">Baixe o aplicativo do Busch Gardens Tampa Bay e tenha tudo o que você precisa durante o seu dia no parque bem na palma da sua mão!</p>
           <a href="https://apps.apple.com/app/apple-store/id452815667"><img src={app1} alt="Clique para baixar nosso aplicativo na app store" className="appPageBannerImgMobile"></img></a> 
            <a href="https://play.google.com/store/apps/details?id=com.buschgardens.mobile&referrer=&utm_source=BGT_Website&utm_medium=GooglePlayStore_AppBadge&utm_campaign=Mobile_App_Page"><img src={app2} alt="Clique para baixar nosso aplicativo na play store" className="appPageBannerImgMobile"></img></a> 
            <img src={appImg1} alt="imagem ilustrativa" className="appPageBannerImgMobile"></img>
            <h4 className="appPageBannerSubtitleMobile">Planejamento</h4>
            <ul className="appPageBannerListMobile">
                <li className="appPageBannerItemMobile">• Planeje o seu dia no Busch Gardens Tampa Bay</li>
                <li className="appPageBannerItemMobile">• Confira o horário de funcionamento do parque</li>
                <li className="appPageBannerItemMobile">• Descubra tudo o que você pode fazer! Experiências com animais, apresentações, atrações, eventos e restaurantes</li>
                <li className="appPageBannerItemMobile">• Veja os horários das nossas apresentações</li>
                <li className="appPageBannerItemMobile">• Faça um upgrade da sua visita com Quick Queue, All-Day Dininig Deal ou assentos reservados nas apresentações</li>

            
            
            </ul>

            <img src={appImg2} alt="imagem ilustrativa" className="appPageBannerImgMobile"></img>
            <h4 className="appPageBannerSubtitleMobile">Minha visita</h4>
            <ul className="appPageBannerListMobile">
                <li className="appPageBannerItemMobile">• Quando você compra seus ingressos diretamente pelo site do SeaWorld Orlando, seus e-tickets ficarão disponíveis no aplicativo do celular (faça o login com o mesmo cadastro que utilizou ao adquirir os ingressos)</li>
                <li className="appPageBannerItemMobile">• Veja suas compras adicionais e tenha acesso aos códigos de barras</li>
                   
            </ul>

            <img src={appImg3} alt="imagem ilustrativa" className="appPageBannerImgMobile"></img>
            <h4 className="appPageBannerSubtitleMobile">Mapa</h4>
            <ul className="appPageBannerListMobile">
                <li className="appPageBannerItemMobile">• Explore nosso mapa interativo para checar a sua localização e as atrações mais próximas</li>
                <li className="appPageBannerItemMobile">• Encontre o caminho para chegar mais rápido a uma determinada atração ou apresentação</li>
                <li className="appPageBannerItemMobile">• Filtre que tipo de experiência deseja buscar, incluindo atrações, apresentações e experiências com animais</li>
                <li className="appPageBannerItemMobile">• Localize o banheiro mais próximo, incluindo banheiros para famílias;</li>
                <li className="appPageBannerItemMobile">• Procure o nome da atração ou outro ponto de interesse para poder chegar onde deseja</li>

            
            
            </ul>
       
        </section>
    );
}


export default AppPageBannerMobile;

