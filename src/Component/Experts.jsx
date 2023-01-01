import React from 'react'
import food from "../images/food.jpg"
export default function Experts() {
  return (
    <div className='max-w-[1240px] p-3 mx-auto my-10 md:grid 
     grid-cols-2    '>
        <div className='col-span-1 md:w-[80%] '>
            <img src={food} alt = "" className='items-center'/>
        </div>
        <div className='col-span-1 flex flex-col justify-center'>
            <h1 className='text-[#00df9a] font-bold my-2'> CHAINES FOOD 
              RESTURENT</h1>
            <p className='my-2 text-justify'>Lorem ipsum dolor sit amet 
             consectetur, adipisicing elit. 
             Necessitatibus, non optio vero nam laudantium labore 
             deserunt sunt esse alias amet pariatur, reprehenderit 
             obcaecati. Vitae perspiciatis possimus dicta cumque, nam 
             voluptatibus?</p>
             <button className='bg-black font-bold text-xl text-white p-3 
               rounded w-[30%]'>Get start</button>
        </div>
     </div>
  )
}
