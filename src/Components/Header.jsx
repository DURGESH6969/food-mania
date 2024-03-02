import React from 'react'
import logo from "../assets/brand-logo.png"
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import useBlurStatus from '../utils/useBlurStatus';


const Header = () => {

  const[btn,setBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();

  useBlurStatus();
  

  return (

    <div className=" flex justify-between items-center pr-[10px] border-gray-400 border-b-2 border-solid shadow-xl bg-purple-200 rounded-lg flex-wrap overflow-hidden">
    <div className="logo-container">
      <img src={logo} alt="brand-logo" className=" w-[90px] h-[90px] m-2 rounded-lg" />
      </div>
    <div className=" items-center">
        <ul className='list-none cursor-pointer flex '>
        <li className='p-[10px] m-[10px] '>Online Status {onlineStatus ? "🟢" : "🔴" }  </li>
        <li className='p-[10px] m-[10px] '><Link className='hover:border-b-2 hover:border-b-purple-400' to={"/"}>Home</Link></li>
        <li className='p-[10px] m-[10px] '><Link className='hover:border-b-2 hover:border-b-purple-400' to={"/contact"}> Contact Us</Link> </li>
        <li className='p-[10px] m-[10px] '><Link className='hover:border-b-2 hover:border-b-purple-400' to={"/about"}>About</Link></li>
        <li className='p-[10px] m-[10px] '>Cart</li>
        <button className='rounded-full self-center px-4 py-[2px] m-[10px] border-2 border-cyan-600 hover:bg-cyan-400' 
        onClick={() => {
          setBtn(prevBtn => (prevBtn === "Login" ? "Logout" : "Login"));
        }}      
      >{btn}</button>
      </ul>
     
    </div>
  </div>
  )
}


export default Header
