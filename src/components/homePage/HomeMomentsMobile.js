import React from 'react';
import '../../css/homeMomentsMobile.css';
import moment1 from '../../assets/moments1.jpg';
import moment2 from '../../assets/moments2.jpg';
import moment3 from '../../assets/moments3.jpg';

function HomeMomentsMobile(){
    return(
        <section className="homeMomentsMobile">
       <div className="homeMomentsContainerMobile">
        <img src={moment1} alt="pessoas se divertindo no parque Busch Gardens Tampa Bay" className="homeMomentsImgMobile"></img>
        <div className="homeMomentsTextContainerMobile">
            <h4 className="homeMomentsTitleMobile">Momentos inesquecíveis no Busch Gardens Tampa Bay!</h4>
            <p className="homeMomentsParagraphMobile">O equilíbrio perfeito entre adrenalina e momentos especiais em família te espera aqui no Busch Gardens Tampa Bay! </p>
            <button className="homeMomentsBtnMobile">Comprar Ingressos</button>
            </div>
            </div>
            <div className="homeMomentsContainerMobile">

            <img src={moment2} alt="Decoração de natal" className="homeMomentsImgMobile"></img>
            <div className="homeMomentsTextContainerMobile">
            <h4 className="homeMomentsTitleMobile">Christmas Town</h4>
            <p className="homeMomentsParagraph2Mobile">Todos os dias - 15 de novembro a 5 de janeiro.</p>
            <p className="homeMomentsParagraphMobile">Luzes coloridas, apresentações especiais e gastronomia deliciosa te aguardam no evento natalino mais adorado de Tampa Bay! </p>
            <button className="homeMomentsBtnMobile">Saiba Mais</button>
            </div>
            </div>
            <div className="homeMomentsContainerMobile">

            <img src={moment3} alt="Atração do Busch Gardens Tampa Bay!" className="homeMomentsImgMobile"></img>
            <div className="homeMomentsTextContainerMobile">
            <h4 className="homeMomentsTitleMobile">Sinta o poder da fênix!</h4>
            <p className="homeMomentsParagraphMobile">Nesta nova aventura, você sentirá todas as emoções de sobrevoar nas asas de uma fênix. Viva sensações únicas em família nesta envolvente aventura de reviravoltas divertidas. </p>
            <button className="homeMomentsBtnMobile">Saiba Mais</button>
            </div>
            </div>
        </section>
    );
}

export default HomeMomentsMobile;