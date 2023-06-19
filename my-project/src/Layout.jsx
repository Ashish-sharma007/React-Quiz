import React, { useState } from "react";
import { data } from "./data";
const Layout = () => {
  const [step, setStep] = useState(1);

  const prevHandler = () => {
    if (step >1)
    setStep(step-1)
  }


  const nextHandler = () => {
    if (step < 3)
    setStep(step+1)
  }


  return  ( 
    <div className="max-w-md mt-10 mx-auto p-32 bg-blue-100 rounded-xl shadow-2xl overflow-hidden">
      <div className="flex justify-between   ">
        <h1 className={` ${step >= 1 ? 'bg-blue-500' : 'bg-zinc-500'}  px-5 p-3 m-2 rounded-full text-white text-2xl `}>
          1
        </h1>
        <h1 className= {` ${step >= 2 ? 'bg-blue-500' : 'bg-zinc-500'}  px-5 p-3 m-2 rounded-full text-white text-2xl `}>
          2
        </h1>
        <h1 className =  {` ${step >= 3 ? 'bg-blue-500' : 'bg-zinc-500'}  px-5 p-3 m-2 rounded-full text-white text-2xl `}
         > 3
        </h1>
      </div>
      <div>
        
        <p className="text-center mt-10 font-semibold text-xl">Step {step} - {data[step-1]?.name} </p>
      </div>

      <div className=" flex justify-between text-center  mt-4 mb-2  text-2xl">
        <button onClick={prevHandler} className= " p-2 mb-2 rounded-lg shadow-lg text-white bg-blue-700 font-semibold  ">
          Previous
        </button>
        <button  onClick={nextHandler} className="  p-2 mb-2 rounded-lg shadow-lg text-white bg-blue-700 font-semibold ">
          Next
        </button>
      </div>
    </div>
  );
};

export default Layout;
