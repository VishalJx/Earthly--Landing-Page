import React from "react"
import "./Navbar.css";

function Navbar(){

  function changeBg(){
    var navbar = document.getElementById("navbar");
    var scrollValue = window.scrollY;
    if(scrollValue<200){
      navbar.classList.remove("bg-color")
    }else{
      navbar.classList.add("bg-color")
    }
  }
  window.addEventListener("scroll", changeBg)

  return (
    <div id="navbar" className="navbar">
      <div className="nav-header">
        {/* <img src={logo} alt=""></img> */}
        <h1>Earthly<span style={{color:"#FF631C"}}>.</span></h1>
      </div>
      <ul className="nav-list">
        <li className="menu"><a href="#home" >Home</a></li>
        <li className="menu"><a href="#about" >About</a></li>
        <li id="samaan"><a href="#product" >Product</a></li>
      </ul>
    </div>
  )
};

export default Navbar;
