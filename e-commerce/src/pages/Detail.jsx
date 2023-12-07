import { React, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { productActionDetail } from '../redux/actions/products'
import { addCard } from '../redux/actions/card'
import { CgMathPlus, CgMathMinus } from "react-icons/cg";

const Detail = () => {
  const { id } = useParams()
  const [count, setCount] = useState(1)
  const dispatch = useDispatch()
  const { product } = useSelector(state => state.product)
  useEffect(() => {
    dispatch(productActionDetail(id))

  }, [dispatch])

  const increment = () => {
    if (count < product?.rating?.count) {
      setCount(count + 1)
    }
  }
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  const addCards = () => {
    dispatch({ type: "DRAWER", payload: true })
    dispatch(addCard(id, count))
  }
  return (
    <div className='w-4/5 cursor-pointer p-4 space-x-5 rounded-lg gap-3 m-2 flex text-left transition color hover:border-[#000]'>
      <img src={product?.image} className='w-2/4 object-cover p-2' />
      <div className='w-3/4 space-y-3'>
        <div className='font-bold text-2xl'>{product?.title}</div>
        <div className='opacity-70 '>{(product?.description)}</div>
        <div className='opacity-70 '>Category: {(product?.category)}</div>
        <div className='opacity-70 '>Rate: {(product?.rating?.rate)}</div>
        <div className='opacity-70 '>Stock: {(product?.rating?.count)}</div>
        <div className='font-bold text-lg mb-4'>{product?.price} TL</div>
        {count > 1 && ((
          <div className='text-black'>Total = {count * product?.price} TL</div>
        ))}
        <div className='flex gap-4 items-center'>
          <CgMathMinus onClick={() => decrement()} size={25} className='border-2 cursor-pointer border-[#000]  rounded-full hover:text-[#FFF] hover:bg-red-300 hover:border-[#FCA5a5] transition-colors' />
          <span className='font-bold text-2xl'>{count}</span>
          <CgMathPlus onClick={() => increment()} size={25} className='border-2 cursor-pointer border-[#000] rounded-full hover:text-[#FFF] hover:bg-black transition-colors ' />
        </div>
        <button
          onClick={addCards}
          className='w-full  hover:duration-150 bg-black text-[#fff] border border-[#000] rounded-lg text-center p-3 hover:bg-white hover:text-black hover:border hover:border-[#000]  '>Add to cart</button>
      </div>


    </div>
  )
}

export default Detail