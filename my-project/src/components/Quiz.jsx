import React, { useReducer } from "react";
import { useState, useEffect } from "react";
import StartScreen from "./StartScreen";
import Loading from "./Loading";
import Questions from "./Questions";
import NextButton from "./NextButton";
import FinishScreen from "./FinishScreen";

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };

    case "start":
      return { ...state, status: "active" };

    case "newAnswer":
      const question = state.questions.at(state.index);

      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };

    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null};
    case "finish":
      return { ...state, status: "finished" };
    case "restart":
      return {
        ...initialState,
        questions: state.questions,
        status: "ready",
      };

    default:
      throw new Error("Action unknown");
  }
}
const Quiz = () => {
  const [{ questions, status, index, answer, points }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const maxPossiblePoints = 280;
  const numQuestons = questions.length;

  useEffect(() => {
    getApiData();
  }, []);

  const getApiData = async function () {
    const response = await fetch("http://localhost:8000/questions");
    const data = await response.json();
    dispatch({ type: "dataReceived", payload: data });
  };

  return (
    <div className=" flex flex-col">
      {status === "loading" && <Loading />}
      {status === "ready" && (
        <StartScreen numQuestons={numQuestons} dispatch={dispatch} />
      )}
      {status === "active" && (
        <div className="flex w-full items-center  bg-purple-200 rounded-full">
          {" "}
          <h1 className=" flex gap-2  m-2 p-2 px-40   font-semibold">
            Question{" "}
            <p>
              {" "}
              {index + 1}/{numQuestons}
            </p>
            <p className="px-4   ">
              Points: {points}/{maxPossiblePoints}
            </p>{" "}
          </h1>{" "}
        </div>
      )}
      {status === "active" && (
        <Questions
          question={questions[index]}
          dispatch={dispatch}
          answer={answer}
        />
      )}
   <NextButton
        dispatch={dispatch}
        answer={answer}
        index={index}
        numQuestion={numQuestons}
      />

 
      {status === "finished" && (
        <FinishScreen points={points} maxPossiblePoints={maxPossiblePoints} dispatch={dispatch} />
      )}
    </div>
  );
};

export default Quiz;
