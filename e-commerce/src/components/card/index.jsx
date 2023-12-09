import React from 'react'
import { SiWearos } from "react-icons/si";

import { addCard } from '../../redux/actions/card' 
import { useDispatch} from 'react-redux'


const Card = ({products}) => {
  const dispatch = useDispatch()
  const addCards = ()=>{
   dispatch(addCard(products.id,1))
   dispatch({type:"DRAWER",payload:true})
   
  }
  return (
    <div  className='w-1/5 border-2 cursor-pointer p-4 rounded-lg gap-3 m-2 flex flex-col items-center text-center transition color hover:border-[#000]'>
        <img onClick={()=> window.location=`detail/${products.id}`} src={products?.image} className='h-32 object-cover p-2'/>
        <div className='font-bold h-16'>{(products?.title).substring(0,45)}..</div>
        <div>{(products?.description).substring(0,45)}...</div>
        <div className='font-bold text-lg mb-4'>{products?.price} TL</div>
        <button onClick={addCards} type='button' className='w-[130px] bg-black text-[#FFF]  p-2 relative flex items-center justify-center  border-black transition-colors rounded-xl text-black hover:border-b-2 hover:bg-white hover:text-black '>Add to cart <SiWearos  size={20} className='ml-2' /></button>
    </div>
  )
}

export default Card