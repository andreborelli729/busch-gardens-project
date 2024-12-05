import React from 'react';
import RestaurantPageMobile from '../components/RestaurantPage/RestaurantPageMobile.js';
import RestaurantPage from '../components/RestaurantPage/RestaurantPage.js';


function Restaurant(){
    return(
        <>
        <RestaurantPageMobile/>
        <RestaurantPage/>
        </>
    );
}


export default Restaurant;