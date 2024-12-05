import React from 'react';
import '../../css/storePage.css';
import apresentacao1 from '../../assets/apresentacao1.jpg';
import apresentacao2 from '../../assets/apresentacao2.jpg';
import apresentacao3 from '../../assets/apresentacao3.jpg';
import apresentacao4 from '../../assets/apresentacao4.jpg';
import apresentacao5 from '../../assets/apresentacao5.jpg';


function PresentationPage(){
    return(
        <section className="storePage">
            
        <div className="storePageTitleContainer">
           <h1 className="storePageTitle">Apresentações</h1>
       </div>

       <div className="storePageStoresContainer">
           <figure className="storePageFigure1">
              
           <img src={apresentacao1} alt="foto  da apresentacao Animal Tales" className="storePageImg"></img>
               <figcaption className="storePageFigcaption2">
                   
               <h4 className="storePageStoreTitle">Animal Tales</h4>                   
              
               </figcaption>
          
           </figure>

           <figure className="storePageFigure2">
              
           <img src={apresentacao2} alt="foto da apresentação Icons"  className="storePageImg"></img>
              <figcaption className="storePageFigcaption2">
                  
                  <h4 className="storePageStoreTitle">Icons</h4>
             
              </figcaption>
         
          </figure>

          <figure className="storePageFigure3">
              
              <img src={apresentacao3} alt="foto da apresentacão Rhythm of Love" className="storePageImg"></img>
              <figcaption className="storePageFigcaption2">
                  
                  <h4 className="storePageStoreTitle">Rhythm of Love</h4>
             
              </figcaption>
         
          </figure>

          <figure className="storePageFigure4">
              
          <img src={apresentacao4} alt="foto da apresentação Storytime at Sesame Street Safari of Fun" className="storePageImg"></img>
              <figcaption className="storePageFigcaption2">
                  
                  <h4 className="storePageStoreTitle">Storytime at Sesame Street Safari of Fun</h4>
             
              </figcaption>
         
          </figure>

          <figure className="storePageFigure5">
              
          <img src={apresentacao5} alt="foto da apresentacao Welcome to Our Street" className="storePageImg"></img>
              <figcaption className="storePageFigcaption2">
                  
                  <h4 className="storePageStoreTitle">Welcome to Our Street</h4>
             
              </figcaption>
         
          </figure>

          </div>
        
        </section>
    );
}

export default PresentationPage;