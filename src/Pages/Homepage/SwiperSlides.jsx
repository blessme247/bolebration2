import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,  Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/swiper-bundle.min.css";
import "swiper/css/navigation";



import image1 from "../../assets/Images/image1JPG.jpg"
import image2 from "../../assets/Images/image2JPG.jpg"
import image3 from "../../assets/Images/image3JPG.jpg"
import image4 from "../../assets/Images/image4JPG.jpg"
import image5 from "../../assets/Images/image5JPG.jpg"
import image6 from "../../assets/Images/image6JPG.jpg"




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
        // navigation={true}
        // navigation={{
        //   nextEl: ".image-swiper-button-next",
        //   prevEl: ".image-swiper-button-prev",
        //   disabledClass: "swiper-button-disabled"
        // }}

        autoplay={true}
        breakpoints={{
          // when window width is >= 350px
          990: {
            // width: 250,
            slidesPerView: 1,
          },
          // 700: {
          //   // width: 250,
          //   slidesPerView: 2,
          // },
          
          
        }}

        pagination={{ clickable: true }}
        className="swiper"
        
      >
        <div className="swiper-wrapper">
          <SwiperSlide className="imageWrapper">
       
            <img src={image1} alt="people bolebrating" />
      

          </SwiperSlide>

          <SwiperSlide className="imageWrapper">
            
          <img src={image2} alt="people bolebrating" />

          </SwiperSlide>

          <SwiperSlide className="imageWrapper">
            
          <img src={image3} alt="people bolebrating" />
          
          </SwiperSlide>

          <SwiperSlide className="imageWrapper">
          <img src={image4} alt="people bolebrating" />
          
          </SwiperSlide>

          <SwiperSlide className="imageWrapper">
          <img src={image5} alt="people bolebrating" />
         
          </SwiperSlide>

          <SwiperSlide className="imageWrapper">
          <img src={image6} alt="people bolebrating" />
         
          </SwiperSlide>
        </div>

        {/* </div> */}
      </Swiper>
    </>
  );
};

export default SwiperSlides;
