import React from 'react';
import '../../css/storePage.css';
import experiencia1 from '../../assets/experiencia1.jpg';
import experiencia2 from '../../assets/experiencia2.jpg';
import experiencia3 from '../../assets/experiencia3.jpg';
import experiencia4 from '../../assets/experiencia4.jpg';
import experiencia5 from '../../assets/experiencia5.jpg';
import experiencia6 from '../../assets/experiencia6.jpg';

function ExperiencePage(){
    return(

        <section className="storePage">
            
        <div className="storePageTitleContainer">
           <h1 className="storePageTitle">Apresentações</h1>
       </div>

       <div className="storePageStoresContainer">
           <figure className="storePageFigure1">
              
           <img src={experiencia1} alt="foto do Busch Gardens Tampa Bay Animal Care Center" className="storePageImg"></img>
               <figcaption className="storePageFigcaption2">
                   
               <h4 className="storePageStoreTitle">Animal Care Center</h4>                   
              
               </figcaption>
          
           </figure>

           <figure className="storePageFigure2">
              
           <img src={experiencia2} alt="foto do Busch Gardens Tampa Bay Animal Connections" className="storePageImg"></img>
              <figcaption className="storePageFigcaption2">
                  
                  <h4 className="storePageStoreTitle">Animal Connections</h4>
             
              </figcaption>
         
          </figure>

          <figure className="storePageFigure3">
              
          <img src={experiencia3} alt="foto do Busch Gardens Tampa Bay Kangaloom" className="storePageImg"></img>
              <figcaption className="storePageFigcaption2">
                  
                  <h4 className="storePageStoreTitle">Bay Kangaloom</h4>
             
              </figcaption>
         
          </figure>

          <figure className="storePageFigure4">
              
          <img src={experiencia4} alt="foto do Busch Gardens Tampa Bay Lory Landing" className="storePageImg"></img>
              <figcaption className="storePageFigcaption2">
                  
                  <h4 className="storePageStoreTitle">Lory Landing</h4>
             
              </figcaption>
         
          </figure>

          <figure className="storePageFigure5">
              
           <img src={experiencia5} alt="foto do Busch Gardens Tampa Bay Serengeti Express" className="storePageImg"></img>
              <figcaption className="storePageFigcaption2">
                  
                  <h4 className="storePageStoreTitle">Serengeti Express</h4>
             
              </figcaption>
         
          </figure>

          <figure className="storePageFigure6">
              
              <img src={experiencia6} alt="foto do Busch Gardens Tampa Bay Serengeti Plain" className="storePageImg"></img>
                 <figcaption className="storePageFigcaption2">
                     
                     <h4 className="storePageStoreTitle">Serengeti Plain</h4>
                
                 </figcaption>
            
             </figure>

          </div>
        
        </section>
    );
}


export default ExperiencePage;