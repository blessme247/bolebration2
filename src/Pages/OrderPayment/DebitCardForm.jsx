import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Field } from "formik";
import axiosInstance from "../../utils/axiosConfig";
import Swal from "sweetalert2";
import { debitCardSchema } from "../../utils/formValidation/debitCardSchema";

const DebitCardForm = () => {

  const navigate = useNavigate();
  return (
    
      <Formik
        initialValues={{
          cardNumber: "",
          nameOnCard: "",
          cvv: "",
        }}
        validationSchema={debitCardSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          setSubmitting(true);

          let payload = {};
          payload.cardNumber = values.cardNumber;
          payload.nameOnCard = values.nameOnCard;
          payload.cvv = values.cvv;
          payload = values;
          console.log(payload);
        //   resetForm()

        //   try {
        //     let response = await axiosInstance.post("/fre", {
        //       email: payload.email,
        //       phone: payload.phone,
        //       gender: payload.gender,
        //       name: `${payload.firstName} ${payload.lastName}`,
        //     });

        //     if (response) {
        //       resetForm();
        //       Swal.fire({
        //         position: "center",
        //         icon: "success",
        //         title:
        //           "Registration successful, kindly check your email for your ticket.",
        //         showConfirmButton: false,
        //         timer: 3500,
        //       }).then(() => {
        //         navigate("/");
        //       });
        //     }
        //     return response;
        //   } catch (error) {
        //     console.log(error, "error");
        //     if (error.response.status === 409) {
        //       Swal.fire({
        //         position: "center",
        //         icon: "error",
        //         title: error.response.data.message,
        //         showConfirmButton: true,
        //         timer: 3500,
        //       });
        //     } else {
        //       Swal.fire({
        //         position: "center",
        //         icon: "error",
        //         title: "Registration failed, Please try again",
        //         showConfirmButton: true,
        //         timer: 3500,
        //       });
        //     }
        //   }
        }}
        validate={(values) => {
          const { firstName, lastName, email, ticketType } = values;
          const errors = {};
          if (!cardNumber) errors.cardNumber = "First Name is required";
          if (!nameOnCard) errors.nameOnCard = "Last Name is required";
          if (!cvv) errors.cvv = "Email is required";
          return errors;
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
          isSubmitting,
        }) => (
          <form className="freeRegisterForm">
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
                  Number
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
                <Field
                  type="radio"
                  name="gender"
                  value="male"
                />
                <label htmlFor="male">Male</label>
              </div>

              <div className="femaleRadioGroup">
                <Field
                  type="radio"
                  name="gender"
                  value="female"
                />
                <label htmlFor="female">Female</label>
              </div>
            </div>

            <div className="selectGroup">
                <label>Ticket type</label>
            <select
              name="ticketType"
              value={values.ticketType}
              onChange={handleChange}
              defaultValue={""}

            >
                <option disabled value="" >
                Select ticket type
              </option>
              <option value="vip" name="ticketType" >
                VIP
              </option>
              <option value="premium" name="ticketType">
                Premium
              </option>
            </select>
            {errors.ticketType && touched.ticketType && (
                  <p className="errorText">{errors.ticketType}</p>
                )}
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
    
  );
};

export default DebitCardForm;
