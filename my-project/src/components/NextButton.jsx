import React from "react";

const NextButton = ({ dispatch, answer, index, numQuestion }) => {
  if (answer === null) return null;
  if (index < numQuestion - 1)
    return (
      <div>
        <button
          className="bg-green-200 p-2 rounded-xl px-4"
          onClick={() => dispatch({ type: "nextQuestion" })}
        >
          Next
        </button>
      </div>
    );
  if (index === numQuestion - 1)
    return (
      <button
        className="bg-green-500 shadow-xl p-2 rounded-xl font-semibold text-lg"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
  else {
    return null;
  }
};

export default NextButton;
