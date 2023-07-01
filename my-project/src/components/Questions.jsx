import React from "react";
import Options from "./Options";

const Questions = ({ question, dispatch, answer }) => {
  return (
    <div className="flex items-center flex-col">
     
      <h1 className="m-4 font-semibold text-xl">{question.question}</h1>
      <Options
        question={question}
        dispatch={dispatch}
        answer={answer}
        
      />
    </div>
  );
};

export default Questions;
