import React from 'react'
import XtrapayLogo from "../../assets/Images/xtrapaylogo.svg"
import partner1 from "../../assets/Images/partner1.jpg"
import partner2 from "../../assets/Images/partner2.jpeg"
import partner3 from "../../assets/Images/partner3.jpg"
import partner4 from "../../assets/Images/partner4.jpeg"

const Partners = () => {
  return (
    <div className='partnersContainer'>
        <h2>Powered By</h2>

        <div className="partnersLogo">
            <img className='partnerLogo' src={partner1} alt="partner's logo" />
            <img className='partnerLogo' src={partner2} alt="partner's logo" />
            <img className='partnerLogo' src={partner3} alt="partner's logo" />
            <img className='partnerLogo' src={partner4} alt="partner's logo" />
        </div>

        {/* <div class="marque">
    <div class="marquee-image">Bolebration 2023 - Grab a Free Ticket Now! </div>
    <div class="marquee-image">Bolebration 2023 - Grab a Free Ticket Now! </div>
    <div class="marquee-image">Bolebration 2023 - Grab a Free Ticket Now! </div>
    <div class="marquee-image">Bolebration 2023 - Grab a Free Ticket Now! </div>
  </div> */}
    </div>
  )
}

export default Partners