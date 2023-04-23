import React, { useState } from "react";
import "./payWithCard.scss";
import { Formik } from "formik";
import { debitCardSchema } from "../../utils/formValidation/debitCardSchema";
import axiosInstance from "../../utils/axiosConfig";

const PayWithCardScreen = ({ setScreenIndex, Amount }) => {

  // get user OTP Details from localStorage 
  let userOTPResendDetails = JSON.parse(localStorage.getItem("foodOrderOTPResendDetails")) || {};

  const [expiryMonth, setMonth] = useState("");
  const [expiryYear, setYear] = useState("");
  const [cvv, setCvv] = useState("");
  const [pin, setPin] = useState("");



  const handleChangeMonth = (e) => {
    let expMonth = e.target.value.length;
    if(expMonth > 2) {
    }
    else {
      setMonth(e.target.value);
    }
    
  };

  const handleChangeYear = (e) => {
    let expYear = e.target.value.length;
    if(expYear > 2) {
    }
    else {
      setYear(e.target.value);
    }
  };

  const handleChangeCVV = (e) => {
    let cvv = e.target.value.length;
    if(cvv > 3) {
    }
    else {
      setCvv(e.target.value);
    }
  };

  const handleChangePin = (e) => {
    let pin = e.target.value.length;
    if(pin > 4) {
    }
    else {
      setPin(e.target.value);
    }
  };


  return (
    <div className="cardPaymentWrapper">

      
      <div className="top">Pay With Debit Card
      
      <span className="backButton" onClick={()=> setScreenIndex(1)}> Go Back</span>
      </div>

      <p className="noSupport">Visa Card Currently not supported</p>

      <Formik
        initialValues={{
          number: "",
          // expiryMonth: "",
          // expiryYear: "",
          // cvv: "",
          // pin: "",
        }}
        validationSchema={debitCardSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          setSubmitting(true);

          // Card details to be included in data object and sent to the backend as part of the payload
          let data = {};
          data.number = values.number;
          data.expiryMonth = expiryMonth;
          data.expiryYear = expiryYear;
          data.cvv = cvv;


          try {

            // Payload being sent here is the card details and the amount
            let response = await axiosInstance.post("/encrypt", {
              data,
              amount: Amount ,
              pin
            });

            console.log(response, "encryResponse")
            if (response) {
              resetForm();

              // Transaction Details to be stored in the local Storage for later use as OTP resend payload
              let OTPDetailsForFoodOrder = {}
              OTPDetailsForFoodOrder.transactionRef = response.data.data.transactionRef;
              OTPDetailsForFoodOrder.paymentId = response.data.data.paymentId;
              OTPDetailsForFoodOrder.amount = response.data.data.amount;

              localStorage.setItem("foodOrderOTPResendDetails", JSON.stringify(OTPDetailsForFoodOrder))
              setScreenIndex(3)

            }
            // return response;
          } catch (error) {

            if (error?.response?.status >= 400) {
              Swal.fire({
                position: "center",
                icon: "error",
                title:
                error?.response?.data?.message?.message,
                showConfirmButton: true,
                timer: 3500,
              })
            }

            else {

              Swal.fire({
                position: "center",
                icon: "error",
                title:
                  "Something Went Wrong, Please try again!",
                showConfirmButton: true,
                timer: 3500,
              })
            }
          }
        }}
        validate={(values) => {
          // const { number, expiryMonth, expiryYear, cvv, pin } = values;
          const { number } = values;
          const errors = {};
          if (!number) errors.number = "Card Number is required";
          // if (!expiryMonth) errors.expiryMonth = "Expiry Month is required";
          // if (!expiryYear) errors.expiryYear = "Expiry Year is required";
          // if (!cvv) errors.cvv = "CVV is required";
          // if (!pin) errors.pin = "Pin is required";
          return errors;
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          handleReset,
          isSubmitting,
        }) => (
          <form className="debitForm">
            <div className="group cardNameAndNumberGroup">
              {/* Card Number */}
              <div className="cardDetailsGroup">
                <label htmlFor="number">Card Number</label>
                <input
                  type="text"
                  name="number"
                  value={values.number}
                  onChange={handleChange}
                ></input>
                {errors.number && touched.number && (
                  <p className="errorText">{errors.number}</p>
                )}
              </div>

              {/* Card Name */}
              <div className="cardDetailsGroup">
                <label htmlFor="cardName">Card Name</label>
                <input
                  type="text"
                  name="cardName"
                  onChange={handleChange}
                ></input>
              </div>
            </div>

            <div className="group additionalDetails">
              <div className="additionalDetailsGroup expiryDate">
                <label htmlFor="expiryMonth">Expiry Month</label>
                <input type="text" required name="expiryMonth" onChange={handleChangeMonth} value={expiryMonth} />
                {/* {errors.expiryMonth && touched.expiryMonth && (
                  <p className="errorText">{errors.expiryMonth}</p>
                )} */}
              </div>

              <div className="additionalDetailsGroup expiryDate">
                <label htmlFor="expiryYear">Expiry Year</label>
                <input type="text" required name="expiryYear" onChange={handleChangeYear} value={expiryYear} />

                {/* {errors.expiryYear && touched.expiryYear && (
                  <p className="errorText">{errors.expiryYear}</p>
                )} */}
              </div>

              <div className="additionalDetailsGroup">
                <label htmlFor="cvv">CVV</label>
                <input
                  type="text"
                  required
                  name="cvv"
                  value={cvv}
                  onChange={handleChangeCVV}
                ></input>
                {/* {errors.cvv && touched.cvv && (
                  <p className="errorText">{errors.cvv}</p>
                )} */}
              </div>
              <div className="additionalDetailsGroup">
                <label htmlFor="pin">Pin</label>
                <input
                  type="text"
                  required
                  name="pin"
                  value={pin}
                  onChange={handleChangePin}
                ></input>
                {/* {errors.pin && touched.pin && (
                  <p className="errorText">{errors.pin}</p>
                )} */}
              </div>
            </div>


                {/* HandleSubmit Button */}
            <button
              disabled={isSubmitting}
              type="button"
              onClick={handleSubmit}
              className="verifyBtn"
            >
              {isSubmitting ? "In Progress" : "Pay"}
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default PayWithCardScreen;
