import React from 'react'

const FinishScreen = ({points,maxPossiblePoints,dispatch}) => {
    const percentage = (points/ maxPossiblePoints) * 100
  return (
    <div className='flex flex-col items-center' >
    <div className='bg-blue-400 p-4 my-10 text-xl rounded-md font-semibold'> <p>
        You Scored <strong>{points}</strong> out of <strong>{maxPossiblePoints}</strong> ({Math.ceil(percentage)}%)
    </p> 
 
    
      </div>
      <button
        className="  bg-green-500 shadow-xl p-2 rounded-xl font-semibold text-lg"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </div>
  )
}

export default FinishScreen