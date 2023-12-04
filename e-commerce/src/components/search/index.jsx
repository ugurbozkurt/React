import React from 'react'
import { MdOutlineDarkMode ,MdDarkMode } from "react-icons/md"
import { BsBasketFill } from "react-icons/bs"
import { useState,useEffect } from "react"
import { useDispatch } from 'react-redux'
import Navbar from '../navbar'


const Search = () => {
    const [color, setColor] = useState(false)
    const dispatch = useDispatch()
    useEffect(()=>{
        const root= document.getElementById('root')
        if(color){
            root.style.backgroundColor = "black"
            root.style.color = "white"
        }
        else{
            root.style.backgroundColor = "white"
            root.style.color = "black"
        }
    },[color])
    return (
        <div className='h-28 flex items-center justify-between px-3'>
            <div className='font-bold text-2xl tracking-wider'>LOGO</div>
            <Navbar></Navbar>
            <div className='flex items-center space-x-4'>
                <input className='border p-3 outline-none rounded-lg' type='text' placeholder='search'></input>
                <div
                    onClick={() => setColor(!color)}
                >
                    {
                        color ? <MdOutlineDarkMode  size={25} className='cursor-pointer' /> : <MdDarkMode  size={25} className='cursor-pointer' />
                    }

                </div>
                <div 
                onClick={()=>dispatch({type:"DRAWER",payload:true})}
                className='relative'>
                    <BsBasketFill size={25} className='cursor-pointer' />
                    <span className='absolute -top-2 -right-3 px-2 bg-red-600 text-white rounded-full text-small'>3</span>
                </div>
            </div>
        </div>
    )
}

export default Search