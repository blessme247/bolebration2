import React, { useEffect, useState } from "react";
import logo from "../../assets/Icons/logo.svg";
import OTPInput from "../../Components/OTPInput";

// Styles import
import "./verifyOtp.scss";
import axiosInstance from "../../utils/axiosConfig";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { handleResendOTP } from "../../utils/handleResendOTP";
import { sendFoodOrderEmail } from "../../utils/SendFoodOrderConfimationEmail";

const VerifyOTP = () => {

   // get user OTP Details from localStorage 
   let userOTPResendDetails = JSON.parse(localStorage.getItem("foodOrderOTPResendDetails")) || {};
 // get user Paid Registration Details from localStorage
 let userPaidRegDetails =
 JSON.parse(localStorage.getItem("userPaidRegDetails")) || {};


 const navigate = useNavigate()

 const [submitStatus, setSubmitStatus ] = useState(false)

const [otp, setOtp] = useState("");
const [minutes, setMinutes] = useState(1);
const [seconds, setSeconds] = useState(30);

const resetOTPTimer = () => {
  setMinutes(1);
  setSeconds(30);
};


let payload = {}
payload.otp = otp;
payload.transactionRef = userOTPResendDetails?.transactionRef;
payload.paymentId = userOTPResendDetails?.paymentId;


let resendPayload = {}
resendPayload.transactionRef = userOTPResendDetails?.transactionRef;
resendPayload.paymentId = userOTPResendDetails?.paymentId;
resendPayload.amount = userOTPResendDetails?.amount;

const handleOTPVerification = async (event)=> {
  setSubmitStatus(true)
  let response;

  
  try {
    
    response = await axiosInstance.post("/confirmotpmeal", 
        payload
    )

    console.log(response, "confirmOtpmealRes")
    if (response?.data.success == false ) {
      Swal.fire({
                position: "center",
                icon: "error",
                title:
                  response.data.message,
                showConfirmButton: true,
                timer: 3500,
              })
              setSubmitStatus(false)
    }
    else if (response?.data.code == "ERR_BAD_REQUEST") {
      Swal.fire({
        position: "center",
        icon: "error",
        title:
          "Something Went Wrong, Please try again!",
        showConfirmButton: true,
        timer: 3500,
      })
      setSubmitStatus(false)
    }
    else {
        sendFoodOrderEmail()
    }

  } catch (error) {
    console.log(error, "confirmOtpmealError")
  }  
  
}

useEffect(() => {

  //ReSet OTP timer to 1 minute, 30 seconds when this component mounts
  const interval = setInterval(() => {
    if (seconds > 0) {
      setSeconds(seconds - 1);
    }

    if (seconds === 0) {
      if (minutes === 0) {
        clearInterval(interval);
      } else {
        setSeconds(59);
        setMinutes(minutes - 1);
      }
    }
  }, 1000);

  return () => {
    clearInterval(interval);
  };
}, [seconds]);

return (
  <div className="verifyOTPage">
    {/* <div className='top'>
          <img src={logo} alt="logo" />
      </div> */}

    <div className="otpMain">
      <div className="otpMain__head">Enter OTP</div>
      <div className="otpMain__subHead">
        An OTP has been sent to your phone number
      </div>

      <div className="otpMain__OTP">
        <p className="text">OTP</p>
        <OTPInput payload={setOtp} />
      </div>

      <div className="otpMain__OTPresend">
        {seconds > 0 || minutes > 0 ? (
          <p className="OTP__timer">
            Time Remaining:{" "}
            <span>
              {" "}
              {minutes < 10 ? `0${minutes}` : minutes}:
              {seconds < 10 ? `0${seconds}` : seconds}{" "}
            </span>
          </p>
        ) : (
          <p className="resendMsg">Didn't recieve code?</p>
        )}

        <button
          disabled={seconds > 0 || minutes > 0}
          style={{
            color: seconds > 0 || minutes > 0 ? "#DFE3E8" : "#D18E0C",
          }}
          className="resendBtn"
          // onClick={resendOTP}
          onClick={()=>handleResendOTP(resendPayload)}
        >
          Resend OTP
        </button>
      </div>

      <button onClick={handleOTPVerification} className="verifyOTPBtn">
        {submitStatus ? "In Progress" : "Verify OTP" }
        
        </button>
    </div>
  </div>
  );
};

export default VerifyOTP;
