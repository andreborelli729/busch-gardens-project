import React from 'react';
import '../../css/storePageMobile.css';
import restaurante1 from '../../assets/restaurante1.jpg';
import restaurante2 from '../../assets/restaurante2.jpg';
import restaurante3 from '../../assets/restaurante3.jpg';
import restaurante4 from '../../assets/restaurante4.jpg';
import restaurante5 from '../../assets/restaurante5.jpg';
import restaurante6 from '../../assets/restaurante6.jpg';
import restaurante7 from '../../assets/restaurante7.jpg';
import restaurante8 from '../../assets/restaurante8.jpg';
import restaurante9 from '../../assets/restaurante9.jpg';
import restaurante10 from '../../assets/restaurante10.jpg';
import restaurante11 from '../../assets/restaurante11.jpg';

function RestaurantPageMobile(){
    return(
<section className="storePageMobile">
            <div className="storePageTitleContainerMobile">
                <h1 className="storePageTitleMobile">Restaurantes</h1>
            </div>
            <div className="storePageStoresContainerMobile">
                <figure className="storePageFigureMobile">
                   
                    <img src={restaurante1} alt="foto  do restaurante Chick-fil-A" className="storePageImgMobile"></img>
                    <figcaption className="storePageFigcaptionMobile2">
                        
                        <h4 className="storePageStoreTitleMobile">Chick-fil-A</h4>
                   
                    </figcaption>
               
                </figure>

                <figure className="storePageFigureMobile">
                   
                   <img src={restaurante2} alt="foto do restaurante Coaster Coffee Company" className="storePageImgMobile"></img>
                   <figcaption className="storePageFigcaptionMobile2">
                       
                       <h4 className="storePageStoreTitleMobile">Coaster Coffee Company</h4>
                  
                   </figcaption>
              
               </figure>

               <figure className="storePageFigureMobile">
                   
                   <img src={restaurante3} alt="foto do restaurante Dragon Fire Grill and Pub" className="storePageImgMobile"></img>
                   <figcaption className="storePageFigcaptionMobile2">
                       
                       <h4 className="storePageStoreTitleMobile">Dragon Fire Grill and Pub</h4>
                  
                   </figcaption>
              
               </figure>

               <figure className="storePageFigureMobile">
                   
                   <img src={restaurante4} alt="foto do restaurante Giraffe Bar" className="storePageImgMobile"></img>
                   <figcaption className="storePageFigcaptionMobile2">
                       
                       <h4 className="storePageStoreTitleMobile">Giraffe Bar</h4>
                  
                   </figcaption>
              
               </figure>

               <figure className="storePageFigureMobile">
                   
                   <img src={restaurante5} alt="foto do restaurante Maroccan Delights" className="storePageImgMobile"></img>
                   <figcaption className="storePageFigcaptionMobile2">
                       
                       <h4 className="storePageStoreTitleMobile">Maroccan Delights</h4>
                  
                   </figcaption>
              
               </figure>

               <figure className="storePageFigureMobile">
                   
                   <img src={restaurante6} alt="foto do restaurante Oasis Pizza" className="storePageImgMobile"></img>
                   <figcaption className="storePageFigcaptionMobile2">
                       
                       <h4 className="storePageStoreTitleMobile">Oasis Pizza</h4>
                  
                   </figcaption>
              
               </figure>

               <figure className="storePageFigureMobile">
                   
                   <img src={restaurante7} alt="foto do restaurante Springs Taproom" className="storePageImgMobile"></img>
                   <figcaption className="storePageFigcaptionMobile2">
                       
                       <h4 className="storePageStoreTitleMobile">Springs Taproom</h4>
                  
                   </figcaption>
              
               </figure>

               <figure className="storePageFigureMobile">
                   
                   <img src={restaurante8} alt="foto do restaurante Treetop Kitchen" className="storePageImgMobile"></img>
                   <figcaption className="storePageFigcaptionMobile2">
                       
                       <h4 className="storePageStoreTitleMobile">Treetop Kitchen</h4>
                  
                   </figcaption>
              
               </figure>

               <figure className="storePageFigureMobile">
                   
                   <img src={restaurante9} alt="foto da loja Twisted Tails Pretzels" className="storePageImgMobile"></img>
                   <figcaption className="storePageFigcaptionMobile2">
                       
                       <h4 className="storePageStoreTitleMobile">Twisted Tails Pretzels</h4>
                  
                   </figcaption>
              
               </figure>

               <figure className="storePageFigureMobile">
                   
                   <img src={restaurante10} alt="foto do restaurante Zagora Café" className="storePageImgMobile"></img>
                   <figcaption className="storePageFigcaptionMobile2">
                       
                       <h4 className="storePageStoreTitleMobile">Zagora Café</h4>
                  
                   </figcaption>
              
               </figure>

               <figure className="storePageFigureMobile">
                   
                   <img src={restaurante11} alt="foto do restaurante Zambia Smokehouse" className="storePageImgMobile"></img>
                   <figcaption className="storePageFigcaptionMobile2">
                       
                       <h4 className="storePageStoreTitleMobile">Zambia Smokehouse</h4>
                  
                   </figcaption>
              
               </figure>

            </div>
        </section>
    );
}


export default RestaurantPageMobile;