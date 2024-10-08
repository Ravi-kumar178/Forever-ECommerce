import React from 'react'
import img1 from '../../All Images_Playette/All Images_Playette/Banners/Banner_Hoodie_Navyblue_WYS24_01.png'
import img2 from '../../All Images_Playette/All Images_Playette/Banners/Croptop_Grey_with_Red_01.png'
import img3 from '../../All Images_Playette/All Images_Playette/Banners/LGBT Color Pallete Design 03.png'
import Slider from 'react-slick'

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [img3,img3,img3,img3];

const NewHero = () => {

    

    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
    };


  return (
    <div className='w-full -z-50'>

        {
            images.length>0 && (
                <div className='-z-50'>
                    <Slider {...settings}>
                      {
                        images.map((item,i)=>(
                            <div className='w-full -z-50' key={i}>
                                       <img src={item} alt=" " className='w-full h-full object-cover -z-50' />
                            </div>
                        ))
                      }
                    </Slider>
                </div>
            )
        } 
    </div>
  )
}

export default NewHero