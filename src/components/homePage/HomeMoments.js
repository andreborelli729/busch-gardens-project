import React from 'react';
import '../../css/homeMoments.css';
import moment1 from '../../assets/moments1.jpg';
import moment2 from '../../assets/moments2.jpg';
import moment3 from '../../assets/moments3.jpg';

function HomeMoments(){
    return(
        <section className="homeMoments">
             <div className="homeMomentsContainer1">
        <img src={moment1} alt="pessoas se divertindo no parque Busch Gardens Tampa Bay" className="homeMomentsImg"></img>
        <div className="homeMomentsTextContainer">
            <h4 className="homeMomentsTitle">Momentos inesquecíveis no Busch Gardens Tampa Bay!</h4>
            <p className="homeMomentsParagraph">O equilíbrio perfeito entre adrenalina e momentos especiais em família te espera aqui no Busch Gardens Tampa Bay! </p>
            <button className="homeMomentsBtn">Comprar Ingressos</button>
            </div>
            </div>
            <div className="homeMomentsGridContainer">
            <div className="homeMomentsContainer2">

<img src={moment2} alt="Decoração de natal" className="homeMomentsImg2"></img>
<div className="homeMomentsTextContainer2">
<h4 className="homeMomentsTitle2">Christmas Town</h4>
<p className="homeMomentsSpan">Todos os dias - 15 de novembro a 5 de janeiro.</p>
<p className="homeMomentsParagraph2">Luzes coloridas, apresentações especiais e gastronomia deliciosa te aguardam no evento natalino mais adorado de Tampa Bay! </p>
<button className="homeMomentsBtn2">Saiba Mais</button>
</div>
</div>
<div className="homeMomentsContainer3">

<img src={moment3} alt="Atração do Busch Gardens Tampa Bay!" className="homeMomentsImg2"></img>
<div className="homeMomentsTextContainer2">
<h4 className="homeMomentsTitle2">Sinta o poder da fênix!</h4>
<p className="homeMomentsParagraph2">Nesta nova aventura, você sentirá todas as emoções de sobrevoar nas asas de uma fênix. Viva sensações únicas em família nesta envolvente aventura de reviravoltas divertidas. </p>
<button className="homeMomentsBtn2">Saiba Mais</button>
</div>
</div>

            </div>
        </section>
    );
}

export default HomeMoments;