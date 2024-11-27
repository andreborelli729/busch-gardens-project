import React from 'react';
import CashlessBanner from '../components/CashlessPage/CashlessBanner.js';
import CashlessQuestion from '../components/CashlessPage/CashlessQuestion.js';
import '../css/accessibilityQuestion.css';

function Cashless(){
    return(
        <>
        <CashlessBanner/>
        <CashlessQuestion/>
        </>
    );
}

export default Cashless;