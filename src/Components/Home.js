import React from "react";
import "./Hom.css";
import homebg from "../images/home-bg.png"
import Typewriter from "typewriter-effect";


function Home(){
  return (
    <div className="page home" id="home">
      <div className="text">
        <h1>BECOME <br className="br"/>SUSTAINABLE</h1>
        <p style={{marginTop:"3rem"}}>
          <Typewriter 
          className="write"
            options={{
              strings: ["Sustainable products at affordable prices"],
              autoStart: true,
              loop: true,
            }}
          />
        </p>
      </div>
      <div className="img">
        <img className="home-img" src={homebg} alt=""></img>
      </div>
    </div>
  )
};

export default Home;
