import React, { useState, useEffect, useContext } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./NewsCarousel.css";
import carousel1 from "../../assets/carousel1.jpg";
import carousel2 from "../../assets/carousel2.jpg";
import carousel3 from "../../assets/carousel3.jpg";
import carousel4 from "../../assets/carousel4.jpg";

import { FormattedMessage } from 'react-intl';
import { Context } from '../Wrapper';




function NewsCarousel() {  

  
  const { locale, selectLanguage } = useContext(Context);      // THIS IS FOR THE LANGUAGE SELECTOR BUTTONS BELOW (IF NEEDED)

  //  this is to detect the screen width to be used to add the slides arrows later on
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  

  const More = {
    borderRadius: "1rem",
    border: "0", 
    background: "#e64127",
    color: "white",
    fontSize:"1.5vh", 
    paddingTop:"3px",
    paddingRight:".5vw",
    paddingLeft:".5vw"
  }

  const hStyle ={
    fontFamily:"HS-Ishraq-Light-1",
    fontWeight:"bolder",
    display: 'inline-block',
    fontSize:"3vw"
  }

  const caption ={
    textAlign: locale === 'en' ? 'left' : 'right', 
  }



  return (
 

        
        <div>
    <Carousel controls = {width > 800 ? false: true }  interval={5000} pause={false} data-bs-theme="light" style={{ width:"100%", margin:"0", fontSize:"1.7vh"}}>
      <Carousel.Item>
        <img src={carousel1} className=" img-fluid carousel-image rounded-bottom " alt='1'/>
        <Carousel.Caption style = {caption}>
          <h3 style={hStyle} className=' border-bottom border-secondary text-light p-2'>
          <FormattedMessage id="reportFire" />
          </h3>
          <p style={{fontSize:"2vw",fontWeight:"lighter" ,fontFamily:"HS-Ishraq-Light-1"}} className='text-light d-none d-md-block '> 
          <FormattedMessage id="fireDescription" /></p>
          <button style={More}>
            <FormattedMessage id='More'/>
          </button>
        </Carousel.Caption>
        
      </Carousel.Item>
      <Carousel.Item>
        <img src={carousel2} className=" img-fluid carousel-image rounded-bottom " alt='2' />
        <Carousel.Caption style = {caption}>
          <h3 style={hStyle} className=' border-bottom border-secondary p-2'>
            <FormattedMessage id="artisticNote"/>
          </h3>
          <p style={{fontSize:"2vw" ,fontFamily:"HS-Ishraq-Light-1"}} className=' d-none d-md-block '>
            <FormattedMessage id="artDescription"/>
          </p>
          <button style={More}>
            <FormattedMessage id='More'/>
          </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={carousel3} className=" img-fluid carousel-image rounded-bottom" alt='3' />
        <Carousel.Caption style = {caption}>
          <h3 style={hStyle} className=' border-bottom border-secondary text-light p-2'>
            <FormattedMessage id='sportsToday'/>
          </h3>
          <p style={{fontSize:"2vw" ,fontFamily:"HS-Ishraq-Light-1"}} className='text-light d-none d-md-block '>
            <FormattedMessage id='sportsDescription'/>
          </p>
          <button style={More}>
            <FormattedMessage id='More'/>
          </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={carousel4} className=" img-fluid carousel-image rounded-bottom" alt='4' />
        <Carousel.Caption style = {caption}>
          <h3 style={hStyle} className=' border-bottom border-secondary p-2'>
             <FormattedMessage id='newDiscoveries'/>
          </h3>
          <p style={{fontSize:"2vw" ,fontFamily:"HS-Ishraq-Light-1"}} className=' d-none d-md-block '>
            <FormattedMessage id='discoveriesDescription'/>
          </p>
          <button style={More}>
            <FormattedMessage id='More'/>
          </button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


      {/* THESE ARE LANGUAGE SELECTOR BUTTONS */}
    {/* <div>
        <button onClick={() => selectLanguage('en')}>English</button>
        <button onClick={() => selectLanguage('ar')}>العربية</button>
      </div> */}


    </div>

  );
}

export default NewsCarousel;
