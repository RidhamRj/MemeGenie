import React, {useState, useEffect } from 'react'

function Card(props) {
  
  return (
      <div className=' flex flex-col items-center w-80 h-auto m-2 border-gray-300 border-solid border-2 p-4 rounded'>
        <img className='w-80 h-[22rem]' src={props.img} alt="" />
        <button onClick={props.button} className='py-2 px-5 rounded-md text-black w-fit m-5 bg-cyan-500 font-sans '>Edit</button>
        
    </div>
  )
}

export default Card

