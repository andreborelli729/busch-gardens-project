import React from 'react';
import '../../css/homeAttraction.css';
import homeAttraction1 from '../../assets/homeAttraction1.jpg';
import homeAttraction2 from '../../assets/homeAttraction2.jpg';
import homeAttraction3 from '../../assets/homeAttraction3.jpg';
import homeAttraction4 from '../../assets/homeAttraction4.jpg';

function HomeAttraction(){
    return(
        <section className="homeAttraction">
            <div className="homeAttractionImgContainer1">
                <img src={homeAttraction1} alt="foto de pessoas se divertindo em uma montanha russa do Busch Gardens Tampa Bay" className="homeAttractionImg"></img>
            </div>

            <div className="homeAttractionTextContainer1">
                <h4 className="homeAttractionTitle">Atrações eletrizantes</h4>
                 <p className="homeAttractionParagraph">O Busch Gardens Tampa Bay conta com atrações de todos os níveis de aventura!</p>
                <button className="homeAttractionBtn">Saiba mais ➞</button>
            </div>

            <div className="homeAttractionTextContainer2">
                <h4 className="homeAttractionTitle">Experiências com animais</h4>
                <p className="homeAttractionParagraph">Conheça animais incríveis bem de pertinho enquanto aprende mais sobre como podemos preservar as espécies na natureza.</p>
                <button className="homeAttractionBtn">Saiba mais ➞</button>
            </div>

            <div className="homeAttractionImgContainer2">
                <img src={homeAttraction2} alt="foto de pessoas se divertindo na presença de onças no zoológico do Busch Gardens Tampa Bay" className="homeAttractionImg"></img>
            </div>

            <div className="homeAttractionImgContainer3">
                <img src={homeAttraction3} alt="foto de uma apresentação artística no Busch Gardens Tampa Bay" className="homeAttractionImg"></img>
            </div>

            <div className="homeAttractionTextContainer3">
                <h4 className="homeAttractionTitle">Apresentações</h4>
                <p className="homeAttractionParagraph">Divirta-se com apresentações ao vivo impressiontantes que deixarão o seu dia no parque ainda mais completo.</p>
                <button className="homeAttractionBtn">Saiba mais ➞</button>
            </div>

            <div className="homeAttractionTextContainer4">
                <h4 className="homeAttractionTitle">Certificações em cuidados animais</h4>
                <p className="homeAttractionParagraph">O Busch Gardens Tampa Bay oferece cuidados de primeira linha a milhares de animais, sendo um dos maiores zoológicos da América do Norte! O parque passou por auditorias especializadas para conquistar o selo Humane Certified™ da American Humane, a maior certificadora mundial de bem-estar animal. Além disso, o US News & World Report nomeou o Busch Gardens Tampa Bay como um dos melhores zoológicos dos Estados Unidos.</p>
                <button className="homeAttractionBtn">Saiba mais ➞</button>
            </div>

            <div className="homeAttractionImgContainer4">
                <img src={homeAttraction4} alt="foto de pessoas se divertindo na presença de um leão marinho bem de perto, no parque Busch Gardens Tampa Bay" className="homeAttractionImg"></img>
             </div>
        
        
        </section>
    );
}

export default HomeAttraction;