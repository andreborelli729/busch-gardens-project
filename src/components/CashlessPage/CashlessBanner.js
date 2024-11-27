import React from 'react';
import '../../css/cashlessBanner.css';

function CashlessBanner(){
    return(
        <section className="cashlessBanner">
            <h2 className="cashlessBannerTitle">Cashless: a maneira mais prática de fazer pagamentos e se divertir!</h2>
            <p className="cashlessBannerParagraph">Nós queremos que você aproveite as atrações do nosso parque da maneira mais simples, eficiente e flexível possível. É por isso que agora, em nosso estacionamento e estabelecimentos, somente aceitamos operações sem dinheiro (cashless).

Você poderá continuar a fazer pagamentos por meio de cartões de crédito, débito ou dispositivos como Apple Pay e Google Pay em nosso estacionamento e todos os estabelecimentos. É mais rápido, seguro e conveniente, para que você passe menos tempo na fila e mais tempo se divertindo!

Se você não tiver um cartão internacional, não se preocupe. Basta passar em um de nossos quiosques Cash-to-Card, que são fáceis de usar e estão convenientemente localizados por todo o parque, para transferir seu dinheiro (gratuitamente) para um cartão de débito pré-pago Visa que pode ser usado em qualquer local onde a bandeira é aceita. Você pode localizar os quiosques Cash-to-Card no mapa ou no aplicativo do parque.</p>
        </section>
    );
}


export default CashlessBanner;