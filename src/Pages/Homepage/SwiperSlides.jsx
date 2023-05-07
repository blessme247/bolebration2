import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,  Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/swiper-bundle.min.css";
import "swiper/css/navigation";


const SwiperSlides = () => {
  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation,  Scrollbar, A11y, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        // slidesPerView={3}
        loop={true}
        

        autoplay={true}
        breakpoints={{
          // when window width is >= 350px
          990: {
            // width: 250,
            slidesPerView: 1,
          },
        }}

        pagination={{ clickable: true }}
        className="swiper"
        
      >
        <div className="swiper-wrapper">
          <SwiperSlide className="imageWrapper">
       
            <img src="https://ik.imagekit.io/blessme247/Bolebration/image1JPG.jpg" alt="people bolebrating" />
      

          </SwiperSlide>

          <SwiperSlide className="imageWrapper">
            
          <img src="https://ik.imagekit.io/blessme247/Bolebration/Image2JPG.jpg" alt="people bolebrating" />

          </SwiperSlide>

          <SwiperSlide className="imageWrapper">
            
          <img src="https://ik.imagekit.io/blessme247/Bolebration/image3JPG.jpg" alt="people bolebrating" />
          
          </SwiperSlide>

          <SwiperSlide className="imageWrapper">
          <img src="https://ik.imagekit.io/blessme247/Bolebration/Image4JPG.jpg" alt="people bolebrating" />
          
          </SwiperSlide>

          <SwiperSlide className="imageWrapper">
          <img src="https://ik.imagekit.io/blessme247/Bolebration/Image5JPG.jpg" alt="people bolebrating" />
         
          </SwiperSlide>

          <SwiperSlide className="imageWrapper">
          <img src="https://ik.imagekit.io/blessme247/Bolebration/Image6JPG.jpg" alt="people bolebrating" />
         
          </SwiperSlide>
        </div>

      </Swiper>
    </>
  );
};

export default SwiperSlides;
