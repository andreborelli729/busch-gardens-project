import React from 'react';
import '../../css/storePage.css';
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

function RestaurantPage(){
    return(
        <section className="storePage">
            
        <div className="storePageTitleContainer">
           <h1 className="storePageTitle">Restaurantes</h1>
       </div>

       <div className="storePageStoresContainer">
           <figure className="storePageFigure1">
              
               <img src={restaurante1} alt="foto  do restaurante Chick-fil-A" className="storePageImg"></img>
               <figcaption className="storePageFigcaption2">
                   
                   <h4 className="storePageStoreTitle">Chick-fil-A</h4>
              
               </figcaption>
          
           </figure>

           <figure className="storePageFigure2">
              
           <img src={restaurante2} alt="foto do restaurante Coaster Coffee Company" className="storePageImg"></img>
              <figcaption className="storePageFigcaption2">
                  
                  <h4 className="storePageStoreTitle">Coaster Coffee Company</h4>
             
              </figcaption>
         
          </figure>

          <figure className="storePageFigure3">
              
          <img src={restaurante3} alt="foto do restaurante Dragon Fire Grill and Pub"  className="storePageImg"></img>
              <figcaption className="storePageFigcaption2">
                  
                  <h4 className="storePageStoreTitle">Dragon Fire Grill and Pub</h4>
             
              </figcaption>
         
          </figure>

          <figure className="storePageFigure4">
              
          <img src={restaurante4} alt="foto do restaurante Giraffe Bar" className="storePageImg"></img>
              <figcaption className="storePageFigcaption2">
                  
                  <h4 className="storePageStoreTitle">Giraffe Bar</h4>
             
              </figcaption>
         
          </figure>

          <figure className="storePageFigure5">
              
              
          <img src={restaurante5} alt="foto do restaurante Maroccan Delights" className="storePageImg"></img>
              <figcaption className="storePageFigcaption2">
                  
                  <h4 className="storePageStoreTitle">Maroccan Delights</h4>
             
              </figcaption>
         
          </figure>

          <figure className="storePageFigure6">
              
              <img src={restaurante6} alt="foto do restaurante Oasis Pizza" className="storePageImg"></img>
              <figcaption className="storePageFigcaption2">
                  
                  <h4 className="storePageStoreTitle">Oasis Pizza</h4>
             
              </figcaption>
         
          </figure>

          <figure className="storePageFigure7">
              
          <img src={restaurante7} alt="foto do restaurante Springs Taproom" className="storePageImg"></img>
              <figcaption className="storePageFigcaption2">
                  
                  <h4 className="storePageStoreTitle">Springs Taproom</h4>
             
              </figcaption>
         
          </figure>

          <figure className="storePageFigure8">
              
          <img src={restaurante8} alt="foto do restaurante Treetop Kitchen" className="storePageImg"></img>
              <figcaption className="storePageFigcaption2">
                  
                  <h4 className="storePageStoreTitle">Treetop Kitchen</h4>
             
              </figcaption>
         
          </figure>

          <figure className="storePageFigure9">
              
          <img src={restaurante9} alt="foto da loja Twisted Tails Pretzels" className="storePageImg"></img>
              <figcaption className="storePageFigcaption2">
                  
                  <h4 className="storePageStoreTitle">Twisted Tails Pretzels</h4>
             
              </figcaption>
         
          </figure>

          <figure className="storePageFigure10">
              
          <img src={restaurante10} alt="foto do restaurante Zagora Café" className="storePageImg"></img>
              <figcaption className="storePageFigcaption2">
                  
                  <h4 className="storePageStoreTitle">Zagora Café</h4>
             
              </figcaption>
         
          </figure>

          <figure className="storePageFigure11">
              
          <img src={restaurante11} alt="foto do restaurante Zambia Smokehouse" className="storePageImg"></img>
              <figcaption className="storePageFigcaption2">
                  
                  <h4 className="storePageStoreTitle">Zambia Smokehouse</h4>
             
              </figcaption>
         
          </figure>

       </div>
   
   </section>
    );
}


export default RestaurantPage;