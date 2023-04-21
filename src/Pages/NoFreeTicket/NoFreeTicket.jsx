import React from "react";
import SecondMarquee from "../../Components/Marquee/SecondMarquee";
import "./noFree.scss";
import { Link } from "react-router-dom";
import sadEmoji from "../../assets/Icons/sad.svg"
import bananaEmoji from "../../assets/Icons/banana.svg"

const NoFreeTicket = () => {
  return (
    <div className="customScreenWrapper">
      <SecondMarquee />

      <div className="contentWrapper">
        <div className="pageContent">

            {/* <img src={sadEmoji} alt="sad smiley icon" /> */}
            {/* <img src={bananaEmoji} alt="banana icon" /> */}

          <div className="message">
            😔ops! You came a bit late and We've run out of <span>free tickets.</span> 
          </div>

          <div className="brief">
            We understand that You might still want to purchase premium and VIP
            tickets online and our team is currently working on the page. We
            will notify the public in due time as soon as the page is available.
          </div>

          <div className="homeRedirect">
            <Link className="homeRedirectLink" to="/"> Go Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoFreeTicket;
