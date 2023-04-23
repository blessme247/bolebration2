import React from 'react'
import { useNavigate } from 'react-router-dom';

//Styles Import
import "./payViaTransfer.scss";


const PayViaTransfer = ({amountDue, clickFunc, info, setScreenIndex }) => {

    const navigate = useNavigate()

  return (
    <div className='transferScreenWrapper'>
        

        <div className="content">

        <p className="prevButton" onClick={setScreenIndex}>Go Back</p>

            <div className = "top">
            Transfer ₦{amountDue} to
            </div>

            <div className="accountDetails">
                <p>Account Name: Xtrapay-Bolebration Events</p>
                <p>Account Number: 1024490016</p>
                <p>Vfd Bank</p>
            </div>

            {info && <p className="info">Please ensure that the Sender's name matches with the name in the Registration form</p>}

            <div className={info ? "accountDetails confirmation" : "accountDetails confirmation adjuster"} onClick={clickFunc}>
                I have sent the money
            </div>

        </div>
    </div>
  )
}

export default PayViaTransfer