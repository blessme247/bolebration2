import React, { useEffect, useState } from "react";
import logo from "../../assets/Icons/logo.svg";
import Marquee from "../../Components/Marquee/Marquee";

import "./homepage.scss";
import SwiperSlides from "./SwiperSlides";
import { Link } from "react-router-dom";
import Partners from "./Partners";
import { split } from "../../animations/text";
import Tweets from "./Tweets";

import { motion } from "framer-motion";
import CallToAction from "./CallToAction";
import SecondMarquee from "../../Components/Marquee/SecondMarquee";

const Homepage = ({count}) => {


// Use State for Event Countdown timer
  const [expiryTime, setExpiryTime] = useState("2023-04-30T00:00:00+01:00");
  const [countdownTime, setCountdownTime]= useState(
      {
          countdownDays:'',
          countdownHours:'',
          countdownlMinutes:'',
          countdownSeconds:''
      }
  );
   const countdownTimer=()=>{
   
       const timeInterval= setInterval(() => {
         const countdownDateTime = new Date(expiryTime).getTime(); 
         const currentTime = new Date().getTime();
         const remainingDayTime = countdownDateTime - currentTime;
         const totalDays = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24));
         const totalHours = Math.floor((remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         const totalMinutes = Math.floor((remainingDayTime % (1000 * 60 * 60)) / (1000 * 60));
         const totalSeconds = Math.floor((remainingDayTime % (1000 * 60)) / 1000);
    
         const runningCountdownTime={
            countdownDays: totalDays,
            countdownHours: totalHours,
            countdownMinutes: totalMinutes,
            countdownSeconds: totalSeconds
         }
      
         setCountdownTime(runningCountdownTime);
    
         if (remainingDayTime < 0) {
            clearInterval(timeInterval);
            setExpiryTime(false);
           }
    
        }, 1000);
   }
    
   useEffect(() => {
    split()
       countdownTimer();
   });

   const letterAnimation = {
    initial: {
      y: 400,
    },
    animate: {
      y: 0,
      transition: {
        ease:[0.6, 0.01, -0.05, 0.95],
        duration: 1,
      }
    }
  }

  return (
    <div>

      {count  >=  2501 && <SecondMarquee/> }
            {count <   2501 && <Marquee /> }
      

      {/* Homepage content */}
      <section className="homepageWrapper">
        <div className="heroSection">

          {/* <div className="layoutWithBg">  */}
          <motion.div className="heroTop"
          initial={{opacity: 0, x: 60}} animate={{opacity: 1, x: 0}}
          transition= {{
           ease: "easeInOut",
           duration: 1.5,
           delay: 0.5
          }}
          >

            <div className="imageWrapper"> 
            <img src={logo} alt="logo" />
            </div>

            <div className="days"> 
            <div className="date daysWrapper">
              <span>Days</span>
              <p>{countdownTime.countdownDays}</p>
            </div>
            <div className="date hoursWrapper">
              <span>Hours</span>
              <p>{countdownTime.countdownHours}</p>
            </div>
            <div className="date minutesWrapper">
              <span>Minutes</span>
              <p>{countdownTime.countdownMinutes}</p>
            </div>
            <div className="date secondsWrapper">
              <span>Seconds</span>
              <p>{countdownTime.countdownSeconds}</p>
            </div>

            </div>
          </motion.div>

          <div className="heroCenter">
            <motion.div className="top" 
            initial={{opacity: 0, x: -60}} animate={{opacity: 1, x: 0}}
            transition= {{
             ease: "easeInOut",
             duration: 2,
             delay: 0.7
            }}
            >Biggest Cookout Festival In Abuja</motion.div>
            {/* <div className="bottom">In Abuja </div> */}
          </div>

          {/* </div> */}

            {/* For desktop */}
          <motion.p className="heroBottom" 
          initial={{opacity: 0, y: 60}} animate={{opacity: 1, y: 0}}
          transition= {{
           ease: "easeInOut",
           duration: 2,
           delay: 1.2
          }}
          >
            Abuja Bolebration is the largest cookout festival in Abuja,
            Nigeria. This event is targeted to promote the South-South
            culture of Nigeria as well as encourage cultural exchange across
            different races and tribes. The event features Bole - Roasted
            Plantain, entertainment attractions including games, music, cultural displays,
            dance contest, rap battles and more and has overtime attracted over
            8,000 atttendees.
          </motion.p>

          {/* For mobile */}
          <motion.p className="heroBottom2" 
          initial={{opacity: 0, y: 60}} animate={{opacity: 1, y: 0}}
          transition= {{
           ease: "easeInOut",
           duration: 2,
           delay: 1.2
          }}
          >
            Abuja Bolebration is the largest cookout festival in Abuja,
            Nigeria. This is targeted to promote the South-South
            culture of Nigeria as well as encourage cultural exchange across
            different races and tribes featuring Bole - Roasted
            Plantain, entertainment attractions such as games, music, cultural displays,
            dance contest, rap battles and many more.
          </motion.p>
        </div>

        <CallToAction count={count} />

        <Partners />

        <Tweets />
      </section>
    </div>
  );
};

export default Homepage;
