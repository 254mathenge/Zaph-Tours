
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// *-


// import Slider from "react-slick";
import hero0 from "../../assets/capturehero.jpg"
import hero1 from "../../assets/hero1.jpeg"
import hero2 from "../../assets/bora-bora-3023437_1280.jpg"
import hero3 from "../../assets/Nairobi Mombasa safaris (1).jpeg"
import hero4 from "../../assets/✈️🌎Kisumu, Kenya.jpeg"
import hero5 from "../../assets/nature-3654845_1280.jpg"

const HeroSliderImages = [
 hero0,hero1,hero2,hero3,hero4,hero5
]


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function HeroSlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        
        {HeroSliderImages.map((heroImage, idx) => {
              return (
             <SwiperSlide>
<img src={heroImage} key={idx} className="sl" alt="hero-image" />

        </SwiperSlide>
                  
             
          )
      } )}
      
      </Swiper>
    </>
  );
}

