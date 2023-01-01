import React from 'react';
import Typed from 'react-typed';

export default function Banner() {
  return (
    <div className='bg-[#2699fb] w-full py-[100px]'>
      <div className='max-w-[1240px] mx-auto text-center font-bold my-[100px]'>
        <div className='text-xl md:text-3xl md:p-[24px]'>Learn With Us</div>
        <h2 className='text-white text-3xl md:text-[80px]  md:p-[24px]'>Grow  With Us</h2>
        <div className='text-[20px] md:text-[50px] text-white  md:p-[24px]'>Learn 
        <Typed strings = {[  ' Web Devlopment', ' Digital Marketing', ' Ethical Hacking']}
          typeSpeed = {100} loop= {true} backSpeed = {50}/>
        </div>
        <button className='bg-black text-xl text-white p-3 rounded'>Get start</button>
      </div>
    </div>
  )
}
