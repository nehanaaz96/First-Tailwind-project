import React from 'react'
// import {Link} from "react-router-dom"
export default function NewsLetter() {
  return (
    <div className='bg-[#2699fb] p-4'>
      <div className='max-w-[1240px] mx-auto md:flex justify-between py-[50px]'>
        <div className='m-2'>
            <h1 className='text-20 md:text-[40px] font-bold text-white'>Want to learn
             latest I.T  skills?</h1>
             <span className='text-white'>Sign up to our newsletter and stay
              uo to date</span>
              </div>
              <div className='m-2'>
                <input type="text" className='p-3 mr-2 text-slate-600 mb-2 
                rounded ' placeholder='Email'/>
                <button className='bg-black text-xl text-white font-bold p-2 rounded'>
                Get start</button>
                <p className='text-white'> WE care about the protection of 
                your data. Read our<br/> <a href='' className='text-black'>
                 privacy policy </a></p>
              </div>
      </div>
    </div>
  )
}
