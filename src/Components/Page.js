import React from "react"
import About from "./About";
import Home from "./Home";
import Product from "./Product";
import "./Page.css";

function Page(){

  return (
    <div>
    <div className="page">
        <Home/>
    </div>
    <div className="page">
        <About/>
    </div>
    <div className="page-product">
        <Product/>
    </div>
    </div>
  )
};

export default Page;
