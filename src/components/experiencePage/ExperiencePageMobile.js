import React from 'react';
import '../../css/storePageMobile.css';
import experiencia1 from '../../assets/experiencia1.jpg';
import experiencia2 from '../../assets/experiencia2.jpg';
import experiencia3 from '../../assets/experiencia3.jpg';
import experiencia4 from '../../assets/experiencia4.jpg';
import experiencia5 from '../../assets/experiencia5.jpg';
import experiencia6 from '../../assets/experiencia6.jpg';


function ExperiencePageMobile(){
    return(
        <section className="storePageMobile">
        <div className="storePageTitleContainerMobile">
            <h1 className="storePageTitleMobile">Apresentações</h1>
        </div>
        <div className="storePageStoresContainerMobile">
            <figure className="storePageFigureMobile">
               
                <img src={experiencia1} alt="foto do Busch Gardens Tampa Bay Animal Care Center" className="storePageImgMobile"></img>
                <figcaption className="storePageFigcaptionMobile2">
                    
                    <h4 className="storePageStoreTitleMobile">Animal Care Center</h4>
               
                </figcaption>
           
            </figure>

            <figure className="storePageFigureMobile">
               
               <img src={experiencia2} alt="foto do Busch Gardens Tampa Bay Animal Connections" className="storePageImgMobile"></img>
               <figcaption className="storePageFigcaptionMobile2">
                   
                   <h4 className="storePageStoreTitleMobile">Animal Connections</h4>
              
               </figcaption>
          
           </figure>

           <figure className="storePageFigureMobile">
               
               <img src={experiencia3} alt="foto do Busch Gardens Tampa Bay Kangaloom" className="storePageImgMobile"></img>
               <figcaption className="storePageFigcaptionMobile2">
                   
                   <h4 className="storePageStoreTitleMobile">Kangaloom</h4>
              
               </figcaption>
          
           </figure>

           <figure className="storePageFigureMobile">
               
               <img src={experiencia4} alt="foto do Busch Gardens Tampa Bay Lory Landing" className="storePageImgMobile"></img>
               <figcaption className="storePageFigcaptionMobile2">
                   
                   <h4 className="storePageStoreTitleMobile">Lory Landing</h4>
              
               </figcaption>
          
           </figure>

           <figure className="storePageFigureMobile">
               
               <img src={experiencia5} alt="foto do Busch Gardens Tampa Bay Serengeti Express" className="storePageImgMobile"></img>
               <figcaption className="storePageFigcaptionMobile2">
                   
                   <h4 className="storePageStoreTitleMobile">Serengeti Express</h4>
              
               </figcaption>
          
           </figure>

           <figure className="storePageFigureMobile">
               
               <img src={experiencia6} alt="foto do Busch Gardens Tampa Bay Serengeti Plain" className="storePageImgMobile"></img>
               <figcaption className="storePageFigcaptionMobile2">
                   
                   <h4 className="storePageStoreTitleMobile">Serengeti Plain</h4>
              
               </figcaption>
          
           </figure>

</div>
    </section>
    );
}


export default ExperiencePageMobile;