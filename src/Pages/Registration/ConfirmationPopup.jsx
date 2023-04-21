import React from 'react'
import greenCheck from "../../assets/Icons/greenCheck.svg"

const ConfirmationPopup = () => {
  return (
    <div className='ConfirmationPopupWrapper'>

        <div className="main">
                <img className='checkImage' src={greenCheck} alt="confirm" />
        </div>

        <div className="text">
            <div className="top">Congratulations</div>
            <div className="bottom">You have successfully secured your free ticket, 
            kindly check your email for a copy.</div>
        </div>
    </div>
  )
}

export default ConfirmationPopup