import {React,useState,useEffect} from 'react'
import { RiCloseCircleFill } from "react-icons/ri";
import { useDispatch } from 'react-redux'
const Cart = () => {
  const dispatch = useDispatch()
  const [color, setColor] = useState(false)

  useEffect(()=>{
    const mycart = document.getElementById('mycart')
    const root  = document.getElementById('root')
    if(root.style.backgroundColor==="black"){
      mycart.style.backgroundColor = "black"
      mycart.style.color ="white"
    }
    else{
      mycart.style.backgroundColor = "white"
      mycart.style.color ="black"
    }
},[color])

  return (
    <div id="mycart"
    className='w-1/3 h-full border p-3 fixed top-0 right-0 z-44'
    >
    <div className='flex items-center justify-between'>
      <h1 className='text-2xl'>My cart :</h1>
      <RiCloseCircleFill onClick={()=>dispatch({type:"DRAWER",payload:false})} size={25} className='cursor-pointer' />
    </div>
    </div>
  )
}

export default Cart