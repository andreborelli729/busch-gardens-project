import React from 'react';
import '../css/policy.css';

function Policy(){
    return(
        <section className="policy">
            <h2 className="policyTitle">Políticas do parque</h2>
            <p className="policyParagraph">Para ajudar a garantir a segurança e a diversão de todos, pedimos que você cumpra as seguintes políticas do parque:</p>
            <p className="policyParagraph">Mantendo a imagem familiar do Busch Gardens Tampa Bay, os visitantes não estão autorizados a usar roupas que contenham linguagem inadequada ou que sejam ofensivas. Sapatos, camisas e calças devem ser usados em todos os momentos, inclusive sobre trajes de banho.</p>
            <p className="policyParagraph">Os seguintes itens não são permitidos dentro do Busch Gardens Tampa Bay:</p>
            <ul className="policyList">
            <li className="policyItem">● Armas ou facas</li>
            <li className="policyItem">● Laser pointers</li>
            <li className="policyItem">● Rádios e outros dispositivos eletrônicos</li>
            <li className="policyItem">● Alimentos e bebidas</li>
        </ul>
        <p className="policyParagraph">O Busch Gardens tem o direito de recusar a entrada ou pedir que uma pessoa saia do parque caso não respeite nossas regras.</p>
        <p className="policyParagraph">Por favor, não utilize seu celular e outros dispositivos em nossas atrações. Não ultrapasse áreas delimitadas para funcionários ou escale cercas e muros.</p>
        <p className="policyParagraph">Leis estaduais exigem que os visitantes obedeçam a todos os avisos e instruções do parque.</p>
        <p className="policyParagraph">Os visitantes devem relatar eventuais ferimentos antes de deixar o parque no dia da visita.</p>
        <p className="policyParagraph">Qualquer pessoa não empregada pelo Busch Gardens está proibida de se envolver em solicitação ou distribuição de folhetos, publicidade ou materiais promocionais.</p>
        <p className="policyParagraph">Não são permitidos animais de estimação dentro do parque. Animais de serviço são permitidos. Consulte o Guest Services para obter mais informações. Oferecemos um centro de cuidados de animais de estimação para sua conveniência.</p>
        <p className="policyParagraph">Sua presença no Busch Gardens Tampa Bay constitui seu consentimento para ser fotografado e/ou gravado enquanto estiver no parque. Você concede ao United Parks & Resorts, Inc. e suas afiliadas, cessionários, licenças e sucessores o direito de usar sua imagem, voz e semelhança em todas as formas e mídias para qualquer finalidade em todo o mundo, de maneira perpétua, sem qualquer limitação ou compensação. Além disso, nenhuma foto, vídeo ou outra gravação feita por visitantes do parque poderá ser usada para qualquer finalidade comercial, ganho ou outra exploração com fins lucrativos sem o consentimento por escrito do United Parks & Resorts, Inc.</p>
        <p className="policyParagraph">Visitantes menores de 14 anos devem estar acompanhados por um adulto.</p>

        
        
        </section>
    );
}


export default Policy;