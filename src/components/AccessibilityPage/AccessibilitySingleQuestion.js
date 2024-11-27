import React, { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";


const AccessibilitySingleQuestion = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <section className="singleQuestion">
        <div className="singleQuestionTitleContainer">
        <h4 className="singleQuestionTitle">{title}</h4>
        <button className="singleQuestionBtn" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <FaArrowUp/>: <FaArrowDown />}
        </button></div>
      {showInfo && <p className="singleQuestionParagraph">{info}</p>}
    </section>
  );
};

export default AccessibilitySingleQuestion;
