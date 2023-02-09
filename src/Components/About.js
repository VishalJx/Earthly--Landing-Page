import React from "react";
import "./About.css"
import Typewriter from "typewriter-effect";

function About(){
  return (
    <div className="page" id="about">
      <div className="about-bg">
        <svg id="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="rgb(109, 250, 215)" fill-opacity="1" d="M0,192L80,186.7C160,181,320,171,480,181.3C640,192,800,224,960,224C1120,224,1280,192,1360,176L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
      <div className="about-content">
        <h1>
          <Typewriter 
            options={{
              strings: ['Welcome to Earthly','Know more about our product'],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>

        <div className="paragraphs">
          <div className="paragraph" style={{backgroundColor:"#00089E", marginRight:"15rem",color:"white"}} id="p1">
            <img src="https://scontent-iad3-1.cdninstagram.com/v/t51.29350-15/260351640_2135798426569465_6358651948514477673_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=boDUsQdeFPYAX8pAdee&_nc_ht=scontent-iad3-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfA0VvtwsDBFTJGhpb2P9WaTjLnokw2nqLRe2rthR0RVWg&oe=63E6B845" style={{width:"18rem"}} alt="" />
            <p>It's high time for all of us to think about our impression and capacity to lessen the waste and its impacts on the climate. This must be finished by settling on a responsible choice of utilizing eco-friendly products.</p>
          </div><br/>
          <div className="paragraph" style={{backgroundColor:"#FFC300", marginLeft:"15rem",color:"#276E28 "}} id="p2">
            <p>Earthly Eco-friendly products like bamboo toothbrushes, bamboo straws, plant-based coffee cups, and many sustainable products are items that are not unsafe to the climate. </p>
            <img src="https://scontent-iad3-1.cdninstagram.com/v/t51.29350-15/272173690_984798762137066_4427291008372384569_n.webp?stp=dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=UKdHxQYb4SwAX-jNLXM&_nc_ht=scontent-iad3-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfDRdNyvhWazWlZ56sbeNkvX597pv6FVx0m2VfWFqjEyDg&oe=63E744A3" style={{width:"18rem"}} alt="" />
          </div><br/>
          <div className="paragraph" style={{backgroundColor:"#720ACE", marginRight:"15rem",color:"white"}} id="p3">
            <img src="https://scontent-iad3-1.cdninstagram.com/v/t51.29350-15/260768314_167009232258458_8230497610472687326_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=VWy2ITsJIcIAX_UmcPS&_nc_ht=scontent-iad3-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfAvRBYet0kTfqFOr3g8TyNQmch26e0z-ZcAiiy45teOTg&oe=63E82F5D" style={{width:"18rem"}} alt="" />
            <p>Enter Earthly, a spot for businesses that need to be a part of the green movement. We do an amazing job to give you the information and alternative sustainable products for your cafes and food business.  </p>
          </div>
        </div>
        <div style={{textAlign:"center", marginTop:"6rem"}}>
          <a href="#product" id="product-btn">Shop Now</a>
        </div>
      </div>
    
    </div>
  )
};

export default About;
