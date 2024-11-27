import React from 'react';
import AppPageBannerMobile from '../components/AppPage/AppPageBannerMobile.js';
import AppPageBanner from '../components/AppPage/AppPageBanner.js';

function AppPage(){
    return(
        <>
        <AppPageBannerMobile/>
        <AppPageBanner/>
        </>
    );
}

export default AppPage;