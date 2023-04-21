import React from "react";
import debitIcon from "../../assets/Icons/debitCard.svg";
import transferIcon from "../../assets/Icons/transfer.svg";
import { notifyUser } from "../../utils/notifyUser";

const TicketPaymentMethod = ({ setScreenIndex }) => {


     // get user Paid Registration Details from localStorage
  let userPaidRegDetails = JSON.parse(localStorage.getItem("userPaidRegDetails")) || {};

  let amountDue = userPaidRegDetails && (userPaidRegDetails.amount )?.toLocaleString();


  return (
    <div className="paymentMethodWrapper">
      {/* <p className="orderDetail total">₦ {userPaidRegDetails && userPaidRegDetails.amount?.toLocaleString() }</p> */}
      {/* <p className="orderDetail charge">Surcharge ₦50</p> */}

      <p className="orderDetail amountDue">Amount Due: ₦{amountDue}</p>

      <div className="paymentOption">
        <div className="heading">Choose your preferred payment option</div>
        <div className="option debitOption" onClick={() => setScreenIndex(2)}>
        {/* <div className="option debitOption" onClick={() => notifyUser()}> */}
          <span>
            {" "}
            <img src={debitIcon} alt="debit" />{" "}
          </span>{" "}
          <span className="title"> Debit Card</span>
        </div>
        <div className="option transferOption" onClick={() => setScreenIndex(4)}>
          <span>
            {" "}
            <img src={transferIcon} alt="transfer" />{" "}
          </span>{" "}
          <span className="title">Transfer</span>
        </div>
      </div>
    </div>
  );
};

export default TicketPaymentMethod;
