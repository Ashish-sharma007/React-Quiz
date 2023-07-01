import React from "react";
import { twMerge } from 'tailwind-merge'
import { useAutoAnimate } from '@formkit/auto-animate/react'

const Options = ({ question, dispatch, answer }) => {
  const hasAnswered = answer !== null;

  return (
   
      <div  >
        {question.options.map((option, index) => (
         <button

            key={option}
            className= {twMerge `flex m-4 p-2 rounded-2xl px-4 bg-zinc-300 font-semibold text-lg  w-96   ${
              index === answer ? "mx-12" : ''} ${
              hasAnswered ? index === question.correctOption ? "bg-cyan-600  text-white"
                  : "bg-orange-400"
                : ""
            } `}
            disabled={hasAnswered}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
          >
            {option}
          </button>
        ))}
      </div>
    
  );
};

export default Options;
