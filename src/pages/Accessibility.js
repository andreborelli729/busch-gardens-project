import React from 'react';
import AccessibilityBanner from '../components/AccessibilityPage/AccessibilityBanner.js';
import Question from '../components/AccessibilityPage/AccessibilityQuestion.js';
import '../css/accessibilityQuestion.css';

function Accessibility(){
return(
    <>
    <AccessibilityBanner/>
    <Question/>
    </>
)
}

export default Accessibility;