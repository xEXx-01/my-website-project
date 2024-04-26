import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineTextsms } from "react-icons/md";
import { FaCat } from "react-icons/fa";
import { FiImage } from "react-icons/fi";
import { IconContext } from "react-icons";

import './Navbar.css'


function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <h1>PetHub</h1>
        </div>
        <div className='menu-logo'>
          <form>
          <ul >
            <li ><a className='login' href="login">เข้าสู่ระบบ</a></li>
            <li ><a className='sighup'href="register">สมัครสมาชิก</a></li>
            <input type='text' placeholder='Search'></input>
          </ul>
          </form>
        </div>
      </nav>
      <label>
        <input className= "slide-menu-toggle "type="checkbox" />
        <div className="toggle">
          <span className="top-line common"></span>
          <span className="middle-line common"></span>
          <span className="buttom-line common"></span>
        </div>


        <div className="slide" >
          <div className='slide-menu'>
            <a>Menu</a>
          </div>
          <div className="slide-buget">
            <ul>
              <IconContext.Provider value={{ className: "all-react-icons" }}>
                <li><a href="/"><FaHome />หน้าหลัก</a></li>
                <li><a href="#"><MdOutlineTextsms />คำแนะนำ</a></li>
                <li><a href="#"><FaCat />พันธุ์สัตว์</a></li>
                <li><a href="/ร้านค้า"><FaShoppingCart />ร้านค้า</a></li>
                <li><a href="/โพสต์"><FiImage />โพสต์</a></li>
              </IconContext.Provider>
            </ul>
          </div>
        </div>
      </label>
    </div>


  )
}

export default Navbar