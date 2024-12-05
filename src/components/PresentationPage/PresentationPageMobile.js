import React from 'react';
import '../../css/storePageMobile.css';
import apresentacao1 from '../../assets/apresentacao1.jpg';
import apresentacao2 from '../../assets/apresentacao2.jpg';
import apresentacao3 from '../../assets/apresentacao3.jpg';
import apresentacao4 from '../../assets/apresentacao4.jpg';
import apresentacao5 from '../../assets/apresentacao5.jpg';

function PresentationPageMobile(){
    return(
  <section className="storePageMobile">
            <div className="storePageTitleContainerMobile">
                <h1 className="storePageTitleMobile">Apresentações</h1>
            </div>
            <div className="storePageStoresContainerMobile">
                <figure className="storePageFigureMobile">
                   
                    <img src={apresentacao1} alt="foto  da apresentacao Animal Tales" className="storePageImgMobile"></img>
                    <figcaption className="storePageFigcaptionMobile2">
                        
                        <h4 className="storePageStoreTitleMobile">Animal Tales</h4>
                   
                    </figcaption>
               
                </figure>

                <figure className="storePageFigureMobile">
                   
                   <img src={apresentacao2} alt="foto da apresentação Icons" className="storePageImgMobile"></img>
                   <figcaption className="storePageFigcaptionMobile2">
                       
                       <h4 className="storePageStoreTitleMobile">Icons</h4>
                  
                   </figcaption>
              
               </figure>

               <figure className="storePageFigureMobile">
                   
                   <img src={apresentacao3} alt="foto da apresentacão Rhythm of Love" className="storePageImgMobile"></img>
                   <figcaption className="storePageFigcaptionMobile2">
                       
                       <h4 className="storePageStoreTitleMobile">Rhythm of Love</h4>
                  
                   </figcaption>
              
               </figure>

               <figure className="storePageFigureMobile">
                   
                   <img src={apresentacao4} alt="foto da apresentação Storytime at Sesame Street Safari of Fun" className="storePageImgMobile"></img>
                   <figcaption className="storePageFigcaptionMobile2">
                       
                       <h4 className="storePageStoreTitleMobile">Storytime at Sesame Street Safari of Fun</h4>
                  
                   </figcaption>
              
               </figure>

               <figure className="storePageFigureMobile">
                   
                   <img src={apresentacao5} alt="foto da apresentacao Welcome to Our Street" className="storePageImgMobile"></img>
                   <figcaption className="storePageFigcaptionMobile2">
                       
                       <h4 className="storePageStoreTitleMobile">Welcome to Our Street</h4>
                  
                   </figcaption>
              
               </figure>

</div>
        </section>
    );
}


export default PresentationPageMobile;