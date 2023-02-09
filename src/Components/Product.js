import React,{useState} from "react";
import "./Product.css";
import Slider from "./Slider";
import { SliderData } from "./SliderData";
import { GrAdd,GrSubtract } from "react-icons/gr";
import { IoIosArrowForward } from "react-icons/io";


function Product(){
  const [counter, setCounter]= useState(0);
  const [show, setShow] = useState(false);
  const price=499;
  const increase=()=>{
    setCounter(()=>counter+1);
  }
  const decrease=()=>{
    if(counter === 0){
      return;  
    }
    setCounter(()=>counter - 1);
  }

  const toggleCart=()=>{
    if(show){
      setShow(false);
    }else{
      setShow(true);
    }    
  }


  return (
    <div className="page-product" id="product">
      <div className="adjust">
        <div className="product-container">
            <div className="Slider">
              <Slider slides={SliderData}/>
              <div className="description2">
                <h3 style={{color:"grey"}}>Description</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga itaque illo fugiat. Iure mollitia laboriosam inventore eos tenetur natus eius? Dolorum quas, repellat hic quam magnam voluptatum velit. Voluptatem, possimus?</p>
              </div>
            </div>
            <div className="product-data">
              <h2 className="head">Sustainability Starter Kit</h2>
              <div className="mid">
                <div className="price">
                  <p id="price">Price</p><span>Rs.{price}/-</span>
                </div>
                <div className="quantity">
                  <p style={{color:"grey"}}>Quantity</p>
                  <div id="counter">
                    <GrSubtract onClick={decrease}style={{border:"1px solid #B9B9B9", borderRadius:"8rem", background:"white", padding:"0.1rem", cursor:"pointer"}}/>
                    <span style={{width:"0.8rem"}}>{counter}</span>
                    <GrAdd onClick={increase} style={{border:"1px solid #B9B9B9", borderRadius:"8rem", background:"white", padding:"0.1rem", cursor:"pointer"}}/>
                  </div>
                </div>
              </div>
                <div className="description">
                  <div className="details">
                    <h3>Consists of :</h3>
                    <div>
                      <ul id="details">
                        <li>2 Bamboo Straws</li>
                        <li>1 Plant Based Reusable Cup with 2 lids</li>
                        <li>1 Natural Loofah</li>
                        <li>1 box of 50 Bamboo Cotton Eartips</li>
                        <li>1 Bamboo Toothbrush</li>
                      </ul>
                    </div>
                </div>
                <div className="features">
                  <h3>Features</h3>
                  <ul id="features">
                    <li>Govt Approved, Tested, and approved in TUV Rhineland, Germany</li>
                    <li>100% recyclable and non-toxic</li>
                    <li>Leak-Proof</li>
                    <li>Odorless tasteless and doesn’t react with hot beverages</li>
                    <li>Lightweight</li>
                    <li>Microwavable</li>
                  </ul>
                </div>
              </div>
              <div id="add-cart" onClick={toggleCart}>
                <span>Add to cart</span>
              </div>
            </div>   
        </div>
      </div>

      {/* ------------------cart---------------*/}
      {
        show &&(
          <div className="cart">
            <div className="cart-container">
              <div className="cart-header">
                <IoIosArrowForward style={{color:"white",fontSize:"4rem"}} onClick={toggleCart}/>
                <h1>Cart</h1>
              </div>
              <br/>
              <div className="cart-menu" style={{padding:"1rem"}}>
                <div style={{marginBottom:"0.5rem",fontSize:"1.2rem"}}>Sustainability Starter Kits</div>
                <div><img src="https://static.wixstatic.com/media/ead566_a12b3feb70ae46139eee97c99f6ecebf~mv2.jpg/v1/fill/w_980,h_551,al_c,q_85,usm_0.66_1.00_0.01/ead566_a12b3feb70ae46139eee97c99f6ecebf~mv2.webp" style={{width:"12rem"}} alt=""></img></div>
                <div style={{display:"flex",alignItems:"center"}}>
                  <div style={{display:"flex", flexDirection:"column",marginRight:"0.8rem"}}>
                    <p id="price">Price</p><span>Rs.{price}/-</span>
                  </div>
                  <div style={{textAlign:"center"}}><span>Quantity<br/>{counter}</span></div>
                </div>
                  <div id="cart-counter">
                    <GrSubtract onClick={decrease}style={{border:"1px solid #B9B9B9", borderRadius:"8rem", background:"white", cursor:"pointer"}}/>
                    <span style={{width:"0.8rem"}}>{counter}</span>
                    <GrAdd onClick={increase} style={{border:"1px solid #B9B9B9", borderRadius:"8rem", background:"white", cursor:"pointer"}}/>
                  </div>
              </div>
            </div>
            <div style={{border:"1px solid grey", color:"white",textAlign:"center", marginBottom:"7rem",background:"black"}}>
              <span style={{fontSize:"2.4rem",padding:"1rem"}}>Total : Rs. {counter*price}</span>
            </div>
          </div>
        )
      }

    </div>
  )
};

export default Product;
