import React, { useState } from "react";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";

export default function Header() {
    const [toggle,setToggle] = useState(false);

return (
  <div className="bg-[#2699fb] p-4">
    <div className="max-w-[1240px]  flex justify-between mx-[-17px] items-center">
      <div className="text-3xl font-bold mx-[50px]" >Good Food </div>
      {
        toggle ?
         <AiOutlineMenu onClick={() =>setToggle(!toggle)} className="text-white text-2xl md:hidden block"/>
         :
     <AiOutlineClose onClick={() =>setToggle(!toggle)} className="text-white text-2xl md:hidden block"/>
     }
      <div>
         <ul className="flex text-white gap-10 md:flex hidden">
          <li>Home</li>
           <li>Company</li>
           <li>Resourses</li>
           <li>About</li>
           <li>Contact</li>
         </ul>

        {/* <Responsive Menu></Responsive> */}
        <ul className={`duration-300 w-full h-screen  text-white bg-black fixed md:hidden top-[92px] ${toggle ? 'left-[0]' : 'left[-100%]'} `}>
          <li className="p-5">Home</li>
           <li className="p-5">Company</li>
           <li className="p-5">Resourses</li>
           <li className="p-5">About</li>
           <li className="p-5">Contact</li>
         </ul>
</div>
    </div>
  </div>
);
 }
