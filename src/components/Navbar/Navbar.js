import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./nav.css";
import { BsPersonCheckFill } from "react-icons/bs";



const Navbar = () => {

  return (
  <>  
    <nav className="navbar">
      <div className="navbar-container container ">
        <input type="checkbox" name="" id="" />
        <div className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
        <ul className="menu-items">
          <li>
            <NavLink aria-current="page" to="/dashboard">
              Home
            </NavLink>
          </li>
          <hR></hR>
          <li>
            <Link className="nav-link " aria-current="page" to="/attendance_log">
              Logs
            </Link>
          </li>
          <hR></hR>
          <li>
            <Link className="nav-link " aria-current="page" to="/">
              LogOut
            </Link>
          </li>
       
         
        </ul>
        <h1 className="logo" >
          <Link to="/dashboard" style={{color:"white"}}><BsPersonCheckFill size={60} /></Link> 
          <label id="text">  &nbsp;&nbsp; Real Time Attendance</label>
        </h1>
      </div>
    </nav>
  </>  
  );
};

export default Navbar;
