import React, { useState } from 'react';
import data from '../../data/dataAccessibility.js';
import SingleQuestion from './AccessibilitySingleQuestion.js';


function AccessibilityQuestion() {
  const[questions, setQuestions] = useState(data);
  return(<main>
<div className='question'>

<h3 className="questionTitle">Perguntas frequentes</h3>

<section className='questionInfo'>

{questions.map((question)=> {
  return <SingleQuestion key={question.id} {...question} />
})}
</section>


</div>


  </main>
);
}

export default AccessibilityQuestion;
