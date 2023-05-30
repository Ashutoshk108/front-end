import React, { useState } from "react";




import './Navbar.css'


export default function Header() {
 
  return (
    <div>
       <nav className="navbar navbar-expand-lg fixed-top navbar-dark" id ="newnav">
  <div className="container-fluid" id="navbar">
    <a className="navbar-brand" href="/" >BIRCTC</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
   
      <li>
          <a className="nav-link active" aria-current="page" href="/search">Search</a>
        </li>
        <li>
        
          <a className="nav-link active" href="/registration">Register</a>
        </li>
        
        <li>
      
          <a className="nav-link active" href="/user-login">Login</a>
        </li>
        
        <li className="nav-item " id="lastitem">
          <a className="nav-link  active " href="/booking" >
            Booking
          </a>
         
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}

