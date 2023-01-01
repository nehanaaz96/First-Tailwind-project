import React from 'react'
import { FaFacebookSquare} from "react-icons/fa";
import { BsInstagram ,BsGithub} from "react-icons/bs";
import { CiTwitter } from "react-icons/ci";


export default function Footer() {
  return (
  <div className='bg-[#2699fb] p-4'>
   <div className='max-w-[1240px] md:grid grid-cols-4 mx-auto'>
     <div className=''>
        <h1 className='text-3xl font-bold text-center mt-10'> Good Food </h1>
        <p className='text-[14px] text-justify text-white mt-5 mx-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
         temporibus voluptate fugiat modi illum, odio animi repudiandae,
           consequuntur. Amet, illo!</p>
           <div className='flex my-5'>
           <FaFacebookSquare className='mx-auto text-xl'/>
           <BsInstagram className='mx-auto  text-xl'/>
           <CiTwitter className='mx-auto text-2xl'/>
           <BsGithub className='mx-auto  text-xl'/>
           </div>
     </div>

        <div className='text-white justify-center ml-[35px]'>
        <h1 className='text-xl text-black font-bold  mt-10'> Solution </h1>
        <ul className='decuration-none py-4'>
        <li className='py-2'>Analistics</li>
        <li className='py-2'>Marketing</li>
        <li className='py-2'>Commere</li>
        <li className='py-2'>Insights</li>
        </ul>
        </div>

        
        <div className='text-white justify-center ml-[35px]'>
        <h1 className='text-xl text-black font-bold mt-10'>Support</h1>
        <ul className=' py-4'>
        <li className='py-2'>Pricing</li>
        <li className='py-2'>Documention</li>
        <li className='py-2'>Guides</li>
        <li className='py-2'>API Status</li>
        </ul>
        </div>


        <div className='text-white justify-center ml-[35px]'>
        <h1 className='text-xl text-black font-bold mt-10'>Company</h1>
        <ul className=' py-4'>
        <li className='py-2'>About</li>
        <li className='py-2'>Blog</li>
        <li className='py-2'>Jobs</li>
        <li className='py-2'>Press</li>
        <li className='py-2'>Careers</li>
        </ul>
        </div> 
     </div>

  </div>
  )
}
