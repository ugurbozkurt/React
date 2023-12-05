import { React, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { productActionDetail } from '../redux/actions/products'

const Detail = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { product } = useSelector(state => state.product)
  useEffect(() => {
    dispatch(productActionDetail(id))
  }, [dispatch])
  console.log("id", id)
  console.log("product", product)
  return (
    <div className='w-3/5  cursor-pointer p-4 rounded-lg gap-3 m-2 flex flex-col items-center text-center transition color hover:border-[#000]'>
      <img src={product?.image} className='h-128 object-cover p-2' />
      <div className='font-bold h-16'>{product?.title}..</div>
      <div>{(product?.description)}</div> 
      <div className='font-bold text-lg mb-4'>{product?.price} TL</div>
    </div>
  )
}

export default Detail