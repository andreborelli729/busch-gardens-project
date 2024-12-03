import React from 'react';
import '../../css/storePage.css';
import loja1 from '../../assets/loja1.jpg';
import loja2 from '../../assets/loja2.jpg';
import loja3 from '../../assets/loja3.jpg';
import loja4 from '../../assets/loja4.jpg';
import loja5 from '../../assets/loja5.png';
import loja6 from '../../assets/loja6.jpg';
import loja7 from '../../assets/loja7.jpg';
import loja8 from '../../assets/loja8.jpg';
import loja9 from '../../assets/loja9.jpeg';
import loja10 from '../../assets/loja10.jpeg';
import loja11 from '../../assets/loja11.jpeg';

function StorePage(){
    return(
        <section className="storePage">
            
             <div className="storePageTitleContainer">
                <h1 className="storePageTitle">Lojas</h1>
            </div>

            <div className="storePageStoresContainer">
                <figure className="storePageFigure1">
                   
                    <img src={loja1} alt="foto  da loja Build-a-Bear Workshop" className="storePageImg"></img>
                    <figcaption className="storePageFigcaption">
                        
                        <h4 className="storePageStoreTitle">Build-a-Bear Workshop</h4>
                        <p className="storePageStoreParagraph">Na loja localizada na área Moroccan Village, os visitantes podem criar bichinhos de pelúcia personalizados para levar para casa como uma lembrança de seu dia divertido. A Build-a-Bear Workshop oferece roupas e acessórios exclusivos do Busch Gardens, incluindo camisetas e ursinhos especiais, além da experiência completa de escolher, criar e nomear seu novo amigo!</p>
                   
                    </figcaption>
               
                </figure>

                <figure className="storePageFigure2">
                   
                   <img src={loja2} alt="foto da loja Kariba Marketplace" className="storePageImg"></img>
                   <figcaption className="storePageFigcaption">
                       
                       <h4 className="storePageStoreTitle">Kariba Marketplace</h4>
                       <p className="storePageStoreParagraph">Localizado entre a Stanley Falls Flume e a SheiKra, o Kariba Marketplace é o lugar perfeito para adquirir lembrancinhas e presentes depois de se aventurar nessas atrações emocionantes. Compre produtos e presentes do Busch Gardens ou refresque-se com uma bebida gelada.</p>
                  
                   </figcaption>
              
               </figure>

               <figure className="storePageFigure3">
                   
                   <img src={loja3} alt="foto da loja Emporium" className="storePageImg"></img>
                   <figcaption className="storePageFigcaption">
                       
                       <h4 className="storePageStoreTitle">Emporium</h4>
                       <p className="storePageStoreParagraph">Explore uma variedade de souvenirs, roupas, chapéus, acessórios, presentes, brinquedos e muito mais na Emporium.</p>
                  
                   </figcaption>
              
               </figure>

               <figure className="storePageFigure4">
                   
                   <img src={loja4} alt="foto da loja Marrakesh Market" className="storePageImg"></img>
                   <figcaption className="storePageFigcaption">
                       
                       <h4 className="storePageStoreTitle">Marrakesh Market</h4>
                       <p className="storePageStoreParagraph">Moderno, eclético e descolado, no Marrakesh Market você encontra todos os tipos de lembranças para levar um pedacinho do seu dia no Busch Gardens para casa.</p>
                  
                   </figcaption>
              
               </figure>

               <figure className="storePageFigure5">
                   
                   <img src={loja5} alt="foto da loja Xcursions®" className="storePageImg"></img>
                   <figcaption className="storePageFigcaption">
                       
                       <h4 className="storePageStoreTitle">Xcursions®</h4>
                       <p className="storePageStoreParagraph">Explore artigos de todo o mundo nesta loja original do Busch Gardens Tampa Bay que inclui produtos do Guy Harvey e muito mais!</p>
                  
                   </figcaption>
              
               </figure>

               <figure className="storePageFigure6">
                   
                   <img src={loja6} alt="foto da loja Nature’s Kingdom®" className="storePageImg"></img>
                   <figcaption className="storePageFigcaption">
                       
                       <h4 className="storePageStoreTitle">Nature’s Kingdom®</h4>
                       <p className="storePageStoreParagraph">Cultive seu amor pela natureza e cultura com esculturas de animais, instrumentos e decorações para a casa.</p>
                  
                   </figcaption>
              
               </figure>

               <figure className="storePageFigure7">
                   
                   <img src={loja7} alt="foto da loja Tiger Treasures Gift Shop" className="storePageImg"></img>
                   <figcaption className="storePageFigcaption">
                       
                       <h4 className="storePageStoreTitle">Tiger Treasures Gift Shop</h4>
                       <p className="storePageStoreParagraph">Encontre souvenirs exclusivos inspirados em tigres na loja Tiger Treasures Gift Shop. Aqui, você descobrirá roupas, acessórios e brinquedos temáticos incríveis!</p>
                  
                   </figcaption>
              
               </figure>

               <figure className="storePageFigure8">
                   
                   <img src={loja8} alt="foto da loja Abby Cadabby's Treasure Hut" className="storePageImg"></img>
                   <figcaption className="storePageFigcaption">
                       
                       <h4 className="storePageStoreTitle">Abby Cadabby's Treasure Hut</h4>
                       <p className="storePageStoreParagraph">Encontre ótimos presentes da Sesame Street® e souvenirs para os pequenos!</p>
                  
                   </figcaption>
              
               </figure>

               <figure className="storePageFigure9">
                   
                   <img src={loja9} alt="foto da loja Painted Camel Bazaar" className="storePageImg"></img>
                   <figcaption className="storePageFigcaption">
                       
                       <h4 className="storePageStoreTitle">Painted Camel Bazaar</h4>
                       <p className="storePageStoreParagraph">Oferecendo aos viajantes todos os tesouros de Pantopia®.</p>
                  
                   </figcaption>
              
               </figure>

               <figure className="storePageFigure10">
                   
                   <img src={loja10} alt="foto da loja Cobra's Crypt Marketplace" className="storePageImg"></img>
                   <figcaption className="storePageFigcaption">
                       
                       <h4 className="storePageStoreTitle">Cobra's Crypt Marketplace</h4>
                       <p className="storePageStoreParagraph">Venha conferir a loja da Cobra's Curse®.</p>
                  
                   </figcaption>
              
               </figure>

               <figure className="storePageFigure11">
                   
                   <img src={loja11} alt="foto da loja Iron Gwazi Gifts" className="storePageImg"></img>
                   <figcaption className="storePageFigcaption">
                       
                       <h4 className="storePageStoreTitle">Iron Gwazi Gifts</h4>
                       <p className="storePageStoreParagraph">Depois de mergulhar em uma queda de 62 metros, 91° de inclinação e atingir velocidades de 122 km/h, faça uma pausa para ver produtos da Iron Gwazi em sua loja de presentes! Encontre roupas, broches para trocar e souvenirs. A loja conta também com produtos em estilo retrô que fazem homenagem à montanha-russa original de madeira.</p>
                  
                   </figcaption>
              
               </figure>

            </div>
        
        </section>
    );
}



export default StorePage;