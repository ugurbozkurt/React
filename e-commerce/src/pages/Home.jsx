import {React,useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {productsAction} from "../redux/actions/products"
import Card from '../components/card'
const Home = () => {
  const {products} = useSelector(state=>state.products)
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(productsAction())
    
  },[dispatch])

  return (
    <div className='flex flex-wrap justify-center'>
      {
        products && products.map((item,index) => (
          <Card products={item} key={index}></Card>
        ))
      }
    </div>
  )
}

export default Home