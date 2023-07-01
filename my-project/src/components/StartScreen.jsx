import React from 'react'

const StartScreen = ({numQuestons, dispatch}) => {
  return (
    <div className='items-center flex-col  flex'> <h1 className=' m-4 p-4 text-2xl shadow-lg  font-semibold'> {numQuestons} questions to test your React Mastery </h1> 
    <button className='bg-blue-400 text-xl mt-10  border-2 border-black p-4 font-semibold rounded-xl shadow-xl self-center ' onClick={()=> dispatch({type: 'start'})}  >Let's start</button>
    </div>
  )
}

export default StartScreen