import React, { useState, useEffect } from 'react'
import SwiperSlides from './SwiperSlides'
import { Link } from 'react-router-dom'
import { getFreeTicketCount } from '../../utils/getCount'

const CallToAction = () => {

  const [count, setCount] = useState()

  useEffect(()=>{
    getFreeTicketCount().then((data)=>{
      setCount(data.count)
    })
  }, [])
  return (
    <div className="callToAction">
          <div className="freeTickets">
            <div className="percent">
            {/* {count ? <span>{Math.round((count/2500) * 100 )} %</span> : null} */}
            <span>100%</span>

            </div>

            <div className="count">
            <p>Free Tickets</p>
            {/* <span>{count && Number(count) - 1}/2500</span> */}
            <span>2500/2500</span>
            </div>
          </div>

          <div className="freeTickets2">
          <div className="percent">
          {/* {count ? <span>{Math.round((count/2500) * 100 )} %</span> : null} */}
          <span>100%</span>

            </div>

            <div className="count">
            <p>Free Tickets</p>
            {/* <span>{count && Number(count) - 1}/2500</span> */}
            <span>2500/2500</span>
            </div>
          </div>

          <SwiperSlides ticketCount />

          <div className="registerBtnWrapper">
           <Link to="/registration" className="registerBtn">
              {/* {count < 2501 && "Register Now"}
              {count >= 2501 && "Get Tickets"} */}
              Get Tickets
            </Link>

            <Link className='orderBtn' to="/order">Pre-order Bole</Link>
            
          </div>
        </div>
  )
}

export default CallToAction