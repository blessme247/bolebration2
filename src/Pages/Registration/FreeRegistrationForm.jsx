import React, { useState } from "react";
import logo from "../../assets/Icons/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { registerSchema } from "../../utils/formValidation/register-schema";
import { Formik, Field } from "formik";
import axiosInstance from "../../utils/axiosConfig";
import Swal from "sweetalert2";


const FreeRegistrationForm = () => {


  const navigate = useNavigate();
  return (
    <div className="formWrapper">
      <div className="logoImage">
        <img src={logo} alt="logo" />
      </div>

      <p className="formHeading">Register</p>
      <p className="formBrief">
        Be one of the <span> lucky 1,500 </span> people to get a free ticket
      </p>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          gender: "",
        }}
        validationSchema={registerSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          setSubmitting(true);

          let payload = {};
          payload.firstName = values.firstName;
          payload.lastName = values.lastName;
          payload.email = values.email;
          payload.phone = values.phone;
          payload.gender = values.gender;
          payload = values;

          try {
            let response = await axiosInstance.post("/free", {
              email: payload.email,
              phone: payload.phone,
              gender: payload.gender,
              name: `${payload.firstName} ${payload.lastName}`
            });
            

            if (response) {
              resetForm();
              Swal.fire({
                position: "center",
                icon: "success",
                title:
                  "Registration successful, kindly check your email for your ticket.",
                showConfirmButton: false,
                timer: 3500,
              }).then(() => {
                navigate("/");
              });

            }
            return response;
          } catch (error) {
            if (error.response.status === 409) {
              Swal.fire({
                position: "center",
                icon: "error",
                title:
                  error.response.data.message,
                showConfirmButton: true,
                timer: 3500,
              })
            }
            else {
              Swal.fire({
                position: "center",
                icon: "error",
                title:
                  "Registration failed, Please try again",
                showConfirmButton: true,
                timer: 3500,
              })
            }
          }
        }}
        validate={(values) => {
          const { firstName, lastName, email, phone } = values;
          const errors = {};
          if (!firstName) errors.firstName = "First Name is required";
          if (!lastName) errors.lastName = "Last Name is required";
          if (!email) errors.email = "Email is required";
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

            <div className="radioGroup">
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

export default FreeRegistrationForm;
