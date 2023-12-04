import React from 'react'
import { RiCloseCircleFill } from "react-icons/ri";
import { useDispatch } from 'react-redux'
const Card = () => {
  const dispatch = useDispatch()
  return (
    <div
    className='w-1/3 h-full border p-3 fixed top-0 right-0 z-44'
    >
    <div className='flex items-center justify-between'>
      <h1 className='text-2xl'>My cart :</h1>
      <RiCloseCircleFill onClick={()=>dispatch({type:"DRAWER",payload:false})} size={25} className='cursor-pointer' />
    </div>
    </div>
  )
}

export default Card