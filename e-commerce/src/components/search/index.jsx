import React from 'react'
import { MdOutlineDarkMode ,MdDarkMode } from "react-icons/md"
import { BsBasketFill } from "react-icons/bs"
import { useState,useEffect } from "react"
import { useDispatch } from 'react-redux'
import Navbar from '../navbar'
import { SiWearos } from "react-icons/si";
const Search = () => {
    const [color, setColor] = useState(false)
    const dispatch = useDispatch()
    useEffect(()=>{
        const root= document.getElementById('root')
        const search= document.getElementById('search')
        if(color){
            root.style.backgroundColor = "black"
            root.style.color = "white"
            search.style.backgroundColor = "black"
        }
        else{
            root.style.backgroundColor = "white"
            root.style.color = "black"
            search.style.backgroundColor = "white"
        }
    },[color])
    return (
        <div className='h-28 flex items-center justify-between px-3'>
            <div className='font-bold text-2xl tracking-wider cursor-pointer'><SiWearos size={50} /></div>
            <Navbar></Navbar>
            <div className='flex items-center space-x-4'>
                <input id='search' autoComplete='off' className='border-b p-3 outline-none rounded-lg' type='text' placeholder='search...'></input>
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
                    <span className='absolute cursor-pointer -top-2 -right-3 bg-red-300 px-2 text-black rounded-full text-small hover:bg-red-400 transition-colors'>3</span>
                </div>
            </div>
        </div>
    )
}

export default Search