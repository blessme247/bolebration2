import React, { useEffect, useState } from "react";
import OrderItem from "./OrderItem";
import axiosInstance from "../../utils/axiosConfig";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Cart = ({ setCartOpen }) => {

  const navigate = useNavigate();


  // get items in cart from localStorage
  let itemsInCart = JSON.parse(localStorage.getItem("cartItems")) || [];



  // get user order email from localStorage
  let orderEmail = JSON.parse(localStorage.getItem("orderEmail")) || {};




  const [cartItemsList, setCartItemsList] = useState([]);

  const [email, setEmail] = useState("");


  // initiate a total variable
  const [total, setTotal] = useState(0);


  const onEmailChanged = (e) => setEmail(e.target.value);

  const canProceedToCheckout = Boolean(email);

  const proceedToCheckout = async (event) => {
    event.preventDefault();
    let response;
    if (email) {
      try {

        // Check if the email already exists in the database
        response = await axiosInstance.post("/checkfree", {
          email,
        });
      } catch (error) {
        Swal.fire({
          position: "center",
          icon: "error",
          title:
            error.response.data.message,
          showConfirmButton: true,
          timer: 3500,
        }).then(()=>{
          navigate("/registration");
        })
      }

      // If email exists, make a post request to send the order to the database
      if (response?.data.email === email) {

        // Store order email in localStorage for cardPayment
        let emailLocalStorage = {}
        emailLocalStorage.email = email;

        localStorage.setItem("orderEmail", JSON.stringify(emailLocalStorage))

        try {
          // initiate a  description variable
          let description = [];

          for (let i = 0; i < cartItemsList.length; i++) {
            description[i] = {
              name: cartItemsList[i].name,
              value: cartItemsList[i].count,
              amount: cartItemsList[i].price,
            };
          }
          let res = await axiosInstance.post("/addmeal", {
            description: JSON.stringify(description),
            email,
            amount: total,
          });

          if(res.statusText === "OK") {
              navigate("/ordercheckout");
          }
        } catch (error) {
          Swal.fire({
            position: "center",
            icon: "error",
            title:
              "Please try again",
            showConfirmButton: true,
            timer: 3500,
          })
        }
      } 
      setEmail("");
    }
  };

  // map over the items in cart to get each amount and quantity
  // itemsInCart.map((item) => {
  //   const amount = item.price.replace("₦", "").replace(",", "");
  //   const quantity = item.count;

  //   // Multiply amount by quantity to get total price of food ordered
  //   // total += amount * quantity;
  //   setTotal(prev=> prev + (amount * quantity))
  // });

  useEffect(() => {
    if (itemsInCart.length > 0) {
      setCartItemsList(itemsInCart);
    }
  }, []);

  useEffect(() => {
    setTotal(0); // To make the total alway be the actual value
    cartItemsList.map((item) => {
      const amount = item.price.replace("₦", "").replace(",", "");
      const quantity = item.count;
      let tempTotal = amount * quantity;

      // Multiply amount by quantity to get total price of food ordered
      // total += amount * quantity;
      setTotal((prev) => prev + tempTotal);
    });
  }, [cartItemsList]);

  return (
    <div className="cartMenu">
      <div className="cartMenu_heading">
        <div className="text">Pre-order Details</div>
        <div onClick={() => setCartOpen(false)} className="closeMenuBtn">
          +
        </div>
      </div>
      <hr />

      <div className="cartMenu_orders">
        {cartItemsList.length > 0 ? (
          cartItemsList.map((item, index) => {
            return (
              <OrderItem
                key={item.id}
                id={index}
                food={item}
                foodName={item.name}
                price={item.price}
                count={item.count}
                updateCartList={setCartItemsList}
                updateTotal={setTotal}
              />
            );
          })
        ) : (
          <p>No items in your cart</p>
        )}
      </div>

      <div className="cartMenu_footer">
        <div className="price">
          <span>Total </span> <span>₦{total?.toLocaleString()}</span>
        </div>

        <form className="cartForm">
          <div className="emailGroup">
            <label htmlFor="email" name="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={onEmailChanged}
            />
            {!email ? (
              <small className="errorMessage">Email field is required</small>
            ) : null}
          </div>
          <div className="checkoutRedirectWrapper">
            {/* <button  className = {canProceedToCheckout ? "checoutBtn" : "disabledBtn"} disabled={!canProceedToCheckout} onClick={proceedToCheckout}>PROCEED TO CHECKOUT</button> */}
            <button
              className="checoutBtn"
              disabled={!canProceedToCheckout}
              onClick={proceedToCheckout}
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Cart;
