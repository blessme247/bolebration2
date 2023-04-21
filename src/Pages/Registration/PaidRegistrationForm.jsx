import React, { useEffect } from "react";
import logo from "../../assets/Icons/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { paidRegisterSchema } from "../../utils/formValidation/register-schema";
import { Formik, Field } from "formik";

import axiosInstance from "../../utils/axiosConfig";
import Swal from "sweetalert2";

// Styles Import
import "./paidRegistration.scss";


const PaidRegistrationForm = () => {

  // get user Paid Registration Details from localStorage 
  let userPaidRegDetails = JSON.parse(localStorage.getItem("userPaidRegDetails")) || {};


  const navigate = useNavigate();
  return (
    <div className="formWrapper">
      <div className="logoImage">
        <img src={logo} alt="logo" />
      </div>

      <p className="formHeading">Register</p>
      <p className="formBrief">
        Please ensure that Registration name matches with the Sender's name
      </p>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          ticketType: "",
          quantity: "",
          amount: "",
        }}
        validationSchema={paidRegisterSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          setSubmitting(true);

          let payload = {};
          let amount;
          payload.firstName = values.firstName;
          payload.lastName = values.lastName;
          payload.email = values.email;
          payload.phone = values.phone;
          payload.quantity = values.quantity;

          // Set amount based on ticketType and Quantity input by the user
          values.ticketType === "regular"
            ? (amount = (1000 * Number(payload.quantity)) + 50)
            : values.ticketType === "vip"
            ? (amount = (100000 * Number(payload.quantity)) + 50)
            : (amount = (250000 * Number(payload.quantity)) + 50);

          payload = values;
          payload.amount = amount;

          console.log(payload)

          // Store user input in localStorage
          localStorage.setItem("userPaidRegDetails", JSON.stringify(payload))

          try {
            let response = await axiosInstance.post("/payatgate", {
              email: values.email,
              phone: values.phone,
              gender: values.gender,
              name: `${values.firstName} ${values.lastName}`,
              quantity: values.quantity,
              amount: values.amount,
              ticketType: values.ticketType
            });

            if (response) {
              resetForm();
              Swal.fire({
                position: "center",
                icon: "success",
                title:
                  "Registration successful, You will now be redirected to the payment screen",
                showConfirmButton: true,
                timer: 3500,
              }).then(() => {
                navigate("/ticketcheckout");
              });
            }
            return response;
          } catch (error) {
            Swal.fire({
              position: "center",
              icon: "error",
              title: "Registration failed, Please try again",
              showConfirmButton: true,
              timer: 3500,
            });
          }

        }}
        validate={(values) => {
          const { firstName, lastName, email, ticketType, quantity } = values;
          const errors = {};
          if (!firstName) errors.firstName = "First Name is required";
          if (!lastName) errors.lastName = "Last Name is required";
          if (!email) errors.email = "Email is required";
          if (!ticketType) errors.ticketType = "Ticket type is required";
          if (!quantity) errors.quantity = "Ticket Quantity is required";
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
          <form className="paidRegisterForm">
            <div className="group nameGroup">
              <div className="formGroup">
                <label htmlFor="firstName" name="firstName">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                />

                {errors.firstName && touched.firstName && (
                  <p className="errorText">{errors.firstName}</p>
                )}
              </div>

              <div className="formGroup">
                <label htmlFor="lastName" name="lastName">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                />
                {errors.lastName && touched.lastName && (
                  <p className="errorText">{errors.lastName}</p>
                )}
              </div>
            </div>

            <div className="group contactGroup">
              <div className="formGroup">
                <label htmlFor="email" name="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
                {errors.email && touched.email && (
                  <p className="errorText">{errors.email}</p>
                )}
              </div>

              <div className="formGroup">
                <label htmlFor="phone" name="phone">
                 Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className=" radioGroup">
              <div className="maleRadioGroup">
                <Field type="radio" name="gender" value="male" />
                <label htmlFor="male">Male</label>
              </div>

              <div className="femaleRadioGroup">
                <Field type="radio" name="gender" value="female" />
                <label htmlFor="female">Female</label>
              </div>
            </div>

            {/* Ticket Form Group */}
            <div className="ticketSelection">
              <div className="selectGroup">
                <label>Ticket type</label>
                <select
                  name="ticketType"
                  value={values.ticketType}
                  onChange={handleChange}
                >
                  <option disabled value="">
                    Select ticket type
                  </option>
                  <option value="regular" name="ticketType">
                    Regular ₦1,050
                  </option>
                  <option value="vip" name="ticketType">
                    VIP (Table of 5) ₦100,050
                  </option>
                  <option value="vvip" name="ticketType">
                    VVIP (Table of 10) ₦250,050
                  </option>
                </select>
                {errors.ticketType && touched.ticketType && (
                  <p className="errorText">{errors.ticketType}</p>
                )}
              </div>

              <div className="ticketQuantityGroup">
                <label htmlFor="quantity" name="quantity" className="qtyHead">
                  Ticket Quantity
                </label>
                <input
                  className="qtySelector"
                  type="text"
                  name="quantity"
                  value={values.quantity}
                  onChange={handleChange}
                />
                {errors.quantity && touched.quantity && (
                  <p className="errorText">{errors.quantity}</p>
                )}
              </div>
            </div>

            <button
              disabled={isSubmitting}
              type="button"
              onClick={handleSubmit}
              className="registerBtn"
            >
              {isSubmitting ? "In Progress" : "Register"}
            </button>

            <Link to="/" className="homeLink">
              Go home
            </Link>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default PaidRegistrationForm;
