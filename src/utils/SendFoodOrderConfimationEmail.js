import Swal from "sweetalert2";
import axiosInstance from "./axiosConfig";


// get items in cart from localStorage
let itemsInCart = JSON.parse(localStorage.getItem("cartItems")) || [];


// get user order email from localStorage
let orderEmail = JSON.parse(localStorage.getItem("orderEmail")) || {};

let email = orderEmail.email;


export const sendFoodOrderEmail = async ()=> {

  // initiate a  description variable
  let description = [];

  for (let i = 0; i < itemsInCart.length; i++) {
    description[i] = {
      name: itemsInCart[i].name,
      value: itemsInCart[i].count,
      amount: itemsInCart[i].price,
    };
  }

  // initiate a  total variable
  let total = 0;

  // map over the items in cart to get each amount and quantity
  itemsInCart.map((item) => {
    const price = item.price.replace("₦", "").replace(",", "");
    const quantity = item.count;

    // Multiply amount by quantity to get total price of food ordered
    total += price * quantity;
  });


 try {
   let res = await axiosInstance.post("/cardpaymeal", { 
       description: JSON.stringify(description),
       email,
       amount: total - 3540

   })

   console.log(res, "resCardpaymeal")
     if(res?.statusText == "OK") {
       Swal.fire({
                 position: "center",
                 icon: "success",
                 title:
                   "Food Order successful! kindly check your email for your order receipt",
                 showConfirmButton: true,
                 timer: 3500,
               }) 
               .then(() => {
                 window.location = "/"
               });
     }
      else  {
        sendFoodOrderEmail()
      }
 } catch (error) {
   
 }
}