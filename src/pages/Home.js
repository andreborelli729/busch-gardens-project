import HomeAttraction from "../components/homePage/HomeAttraction.js";
import HomeAttractionMobile from "../components/homePage/HomeAttractionMobile.js";
import HomeMomentsMobile from "../components/homePage/HomeMomentsMobile.js";
import HomeMoments from "../components/homePage/HomeMoments.js";
import HomeCarousel from "../components/homePage/HomeCarousel.js";
function Home(){
    return(
        <>
        <HomeCarousel/>
        <HomeMomentsMobile/>
        <HomeMoments/>
        <HomeAttractionMobile/>
        <HomeAttraction/>
        </>
    );
}


export default Home;