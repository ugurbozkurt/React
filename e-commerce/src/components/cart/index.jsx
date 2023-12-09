import { React, useState, useEffect } from 'react'
import { RiCloseCircleFill } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { removeCard } from '../../redux/actions/card';
import { IoTrashOutline } from "react-icons/io5";

const Cart = () => {
  const dispatch = useDispatch();
  const [color, setColor] = useState(false);

  const { cardItems } = useSelector(state => state.card)
  const carL = cardItems?.length
  


  let totalPrice = 0
  for(let i = 0; i<cardItems?.length; i++)
  {
    totalPrice += cardItems?.[i].price
  }
  
  const deleteCard = (id) => {
    dispatch(removeCard(id))
    if (carL <=1) {
      handleCloseClick()
    }

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
  }, [color, cardItems]);
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
      className='w-1/3 h-full border  overflow-y-auto p-3  fixed top-0 right-0 z-44'
    >
      <div className='flex items-center justify-between'>
        <h1 className='text-2xl'>My cart : {carL}</h1>
        <RiCloseCircleFill
          onClick={handleCloseClick}
          size={25}
          className='cursor-pointer'
        />
      </div>
      {
        cardItems?.map((item, index) => (
          <div key={index} className='flex mt-5 h-28 items-center justify-between border-b pb-7 px-7 py-5'>
            <img src={item?.image} className='h-24'></img>
            <div className='w-44'>
              <div className='font-bold text-sm'>{item?.title}</div>
              <div className='opacity-70 text-xs'>{item?.description.substring(0, 100)}</div>
            </div>
            <div className='font-bold text-lg'>{item?.price * item?.qty} TL</div>
            <IoTrashOutline onClick={() => deleteCard(item?.id)} fill='white' className='w-[30px] cursor-pointer text-center h-[30px] p-1 rounded-full transition-colors hover:bg-black hover:text-[#FFF]' />
          </div>
        ))
      }
      {
        totalPrice>0 && (
          <div className='font-bold text-2xl text-right'>Total Price : {totalPrice} TL</div>
        )
      }
    </div>
  );
};

export default Cart;
