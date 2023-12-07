import { React, useState, useEffect } from 'react'
import { RiCloseCircleFill } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { MdRemoveShoppingCart } from "react-icons/md";
import { removeCard } from '../../redux/actions/card';
const Cart = () => {
  const dispatch = useDispatch();
  const [color, setColor] = useState(false);
  const { cardItems } = useSelector(state => state.card)
  const deleteCard = (id)=>{
    dispatch(removeCard(id))
  }
  useEffect(() => {
    const mycart = document.getElementById('mycart');
    const root = document.getElementById('root');
    if (root.style.backgroundColor === "black") {
      mycart.style.backgroundColor = "black";
      mycart.style.color = "white";
    } else {
      mycart.style.backgroundColor = "white";
      mycart.style.color = "black";
    }
  }, [color]);

  const handleCloseClick = () => {
    const mycart = document.getElementById('mycart');
    mycart.classList.add('closing');
    setTimeout(() => {
      dispatch({ type: "DRAWER", payload: false });
    }, 300); 
  };

  return (
    <div
      id="mycart"
      className='w-1/3 h-full border p-3 fixed top-0 right-0 z-44'
    >
      <div className='flex items-center justify-between'>
        <h1 className='text-2xl'>My cart :</h1>
        <RiCloseCircleFill
          onClick={handleCloseClick}
          size={25}
          className='cursor-pointer'
        />

      </div>
    {
      cardItems?.map((item,index)=>(
        <div key={index} className='flex mt-5 h-28 items-center justify-between border-b pb-7 px-7 py-5'>
        <img src={item?.image} className='h-24'></img>
        <div className='w-44'>
          <div className='font-bold text-sm'>{item?.title}</div>
          <div className='opacity-70 text-xs'>{item?.description.substring(0,100)}</div>
        </div>
        <div className='font-bold text-lg'>{item?.price*item?.qty} TL</div>
        <MdRemoveShoppingCart onClick={()=> deleteCard(item?.id)} fill='white' className='w-[30px] cursor-pointer text-center h-[30px] bg-red-500 p-2 rounded-full transition-colors hover:bg-black' />
      </div>
      ))
    }
    </div>
  );
};

export default Cart;
