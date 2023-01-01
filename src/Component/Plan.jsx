import React from 'react'
import {IoAccessibilitySharp } from "react-icons/io5";
import { ImManWoman } from "react-icons/im";

export default function Plan() {
  return (
    <div className='py-[100px] px-2 '>
    <div className='max-w-[1240px] mx-auto md:grid grid-cols-3 gap-6'>
    
    <div className='h-[430px] shadow-xl my-2 hover:scale-105 duration-500 
     content-center  text-center'>
    <IoAccessibilitySharp className='text-3xl m-10 mx-40'/>
    <h1 className='text-2xl font-bold'>Web Deblopment</h1>
    <h1 className='text-2xl p-2 font-bold'>$149</h1>
    <p className='text-center p-2 text-bold text-[14px]'>Lorem
     ipusam is simply</p>
    <p className='text-center py-2 px-8 text-[14px] px-auto text- 
     boldborder border-gray-100  border border-gray-100'>Lorem ipsum
     dolor sit amet consectetur adipisicing elit ipsum dolor sit.</p>
     <p className='text-center py-2 px-8 text-[14px] px-auto text- 
     boldborder border-gray-100  border border-gray-100'>Lorem ipsum
     dolor sit amet consectetur</p>
     <button className='text-sm bg-black text-xl bg-[#00df9a] text-white 
      p-2  my-[20px] px-[50px] rounded text-center'>Get start</button>
    </div>
    

    <div className='h-[430px] shadow-xl my-2 bg-gray-100 hover:scale-105 
     duration-500  text-center' >
    <ImManWoman className='text-3xl m-10 mx-40	content-end	'/>
    <h1 className='text-2xl  font-bold'>Degital Marketing</h1>
    <h1 className='text-2xl p-2 font-bold'>$149</h1>
    <p className='text-center p-2 text-bold text-[14px]'>Lorem
     ipusam is simply</p>
    <p className='text-center py-2 px-8 text-[14px] px-auto text- 
     boldborder border-gray-100  border border-gray-100'>Lorem ipsum
     dolor sit amet consectetur adipisicing elit ipsum dolor sit.</p>
     <p className='text-center py-2 px-8 text-[14px] px-auto text- 
     boldborder border-gray-100  border border-gray-200'>Lorem ipsum
     dolor sit amet consectetur</p>
     <button className='text-sm  text-[#00df9a] bg-black text-white p-3 
      px-[50px] my-[20px] rounded text-center'>Get start</button>
    </div>


    <div className='h-[430px] shadow-xl my-2 hover:scale-105 duration-500 
     content-center  text-center'>
    <IoAccessibilitySharp className='text-3xl m-10 mx-40	content-end	'/>
    <h1 className='text-2xl  font-bold'>App Deblopment</h1>
    <h1 className='text-2xl p-2 font-bold'>$149</h1>
    <p className='text-center p-2 text-bold text-[14px]'>Lorem
     ipusam is simply</p>
    <p className='text-center py-2 px-8 text-[14px] px-auto text- 
     boldborder border-gray-100  border border-gray-100'>Lorem ipsum
     dolor sit amet consectetur adipisicing elit ipsum dolor sit.</p>
     <p className='text-center py-2 px-8 text-[14px] px-auto text- 
     boldborder border-gray-100  border border-gray-100'>Lorem ipsum
     dolor sit amet consectetur</p>
     <button className='bg-black text-xl bg-[#00df9a] text-white p-2 
     px-[50px] my-[20px] rounded text-center text-sm'>Get start</button>
    </div>

    </div>
    </div>
  )
}
