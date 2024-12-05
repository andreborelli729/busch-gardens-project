import React from 'react';
import PresentationPageMobile from '../components/PresentationPage/PresentationPageMobile.js';
import PresentationPage from '../components/PresentationPage/PresentationPage.js';

function Presentation(){
    return(
        <>
        <PresentationPageMobile/>
        <PresentationPage/>
        </>
    );
}

export default Presentation;