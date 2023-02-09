import React,{useState} from "react";
import "./Slider.css";
import { SliderData } from "./SliderData";
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";

function Slider({slides}){
    const [current, setCurrent] = useState(0);
    const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className='slider'>
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <div className="caraousal">
                  <IoIosArrowBack id="arrow" className='left-arrow' onClick={prevSlide} style={{fontSize:"2.5rem",border:"2px solid white", borderRadius:"8rem"}}/>
                  <img src={slide.image} alt='travel image' className='image' />
                  <IoIosArrowForward id="arrow" className='right-arrow' onClick={nextSlide} style={{fontSize:"2.5rem",border:"2px solid white", borderRadius:"8rem"}}/>  
              </div>
            )}
          </div>
        );
      })}
    </section>
  )
};

export default Slider;
