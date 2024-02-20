import React from 'react'
import logo from "../detailed-chef-logo-template/brand-logo.png"
import { useState } from 'react';
import {Link} from 'react-router-dom';
const Header = () => {

  const[btn,setBtn] = useState("Login");


  return (
    <div className="header">
    <div className="logo-container">
      <img src={logo} alt="brand-logo" className="logo" />
    </div>
    <div className="nav-items">
      <ul>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/contact"}> Contact Us</Link> </li>
        <li><Link to={"/about"}>About</Link></li>
        <li>Cart</li>
        <button 
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
