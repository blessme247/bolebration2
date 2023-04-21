import React, { useState } from "react";
import logo from "../../assets/Icons/logo.svg";
import TicketPaymentMethod from "./TicketPaymentMethod";

// Styles import
import "../OrderPayment/payment.scss";
import PayWithCardScreen from "./PayWithCardScreen";
import PayViaTransfer from "../../Components/PayViaTransfer/PayViaTransfer";
import { NotifyUserAfterOrderTransfer, OptionNotifier } from "../../utils/notifyUser";
import { useNavigate } from "react-router-dom";
import VerifyOTP from "./VerifyOTP";

const TicketPayment = () => {
  const navigate = useNavigate();

  // State to update the payment method screen
  const [screenIndex, setScreenIndex] = useState(1);
  const [isSwal, setIsSwal] = useState(false)

  // get user Paid Registration Details from localStorage
  let userPaidRegDetails =
    JSON.parse(localStorage.getItem("userPaidRegDetails")) || {};

    let Amount = userPaidRegDetails && userPaidRegDetails?.amount;

  let ticketUnitPrice =
    userPaidRegDetails &&
    (userPaidRegDetails.amount - 50) / userPaidRegDetails.quantity;

    let amount = userPaidRegDetails && (userPaidRegDetails?.amount - 50).toLocaleString();

  let totalAmount =
    userPaidRegDetails && (userPaidRegDetails?.amount ).toLocaleString();

    // let ticketUnitPrice = userPaidRegDetails && userPaidRegDetails.amount / userPaidRegDetails.quantity;  // ticketUnitPrice

    // if (!((ticketUnitPrice == 0) || (ticketUnitPrice > 0) || (ticketUnitPrice < 0))) {
    //   amount = 0;
    // } else if (((ticketUnitPrice == 0) || (ticketUnitPrice > 0) || (ticketUnitPrice < 0))) {
    //   amount = ticketUnitPrice.toLocaleString()
    // }


  const redirect = (loc) => {
    window.location = loc
  }

  return (
    <div className="paymentScreenWrapper">
      <div className="paymentContent">
        {/* {screenIndex === 1 && ( */}
        <div className="top">
          <img src={logo} alt="bolebration logo" />
          <p>Ticket Payment</p>
        </div>
        {/* )} */}
        <div className="main">
          <div className="left" style={{ backgroundColor: "#D18E0C" }}>
            <p className="heading">Ticket Summary</p>
            <hr />
            <div className="ticketDetails">
              <p>
                {userPaidRegDetails &&
                  userPaidRegDetails.ticketType?.toUpperCase()}{" "}
                Ticket
              </p>
              <p className="detail">
                <span>Amount</span>{" "}
                <span>
                  ₦ {userPaidRegDetails && amount}
                </span>
              </p>
              <p className="detail">
                <span>Quantity</span>{" "}
                <span>{userPaidRegDetails && userPaidRegDetails.quantity}</span>
              </p>
              <p className="detail">
                <span>Charge</span> <span>₦50</span>
              </p>
              {/* <p className="detail">
                <span>Event date</span> <span>30/04/2023</span>
              </p> */}
            </div>
            <hr />

            <div className="aggregate">
              <p className="detail totalDetail">
                <span>Total</span> <span>₦ {totalAmount} </span>
              </p>

              <p className="detail lastDetail">
                <span>Inclusive of ₦50 transaction charge </span>
              </p>
            </div>
          </div>
          <div className="right">
            {screenIndex === 1 ? (
              <TicketPaymentMethod setScreenIndex={setScreenIndex} />
            ) : screenIndex === 2 ? (
              <PayWithCardScreen Amount={Amount} setScreenIndex={setScreenIndex} />
            ) : screenIndex === 3 ? (
              <VerifyOTP setScreenIndex={setScreenIndex} />
            ) : screenIndex === 4 ? (
              <>
                <PayViaTransfer
                  amountDue={totalAmount}
                  info={true}
                  clickFunc={() =>{ 
                    setIsSwal(true)  
                  }
                  }
                />
                {isSwal && <OptionNotifier
                  values={{"yes": "Yes",
                           "no": "No"}}
                  director={{"yes": "/order",
                  "no": "/"}}
                  redirect={redirect} 
                  title={"Ticket order successful, Your ticket will be sent via email on payment confirmation! Do you want to pre-order food now?"} 
                 /> }
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketPayment;
