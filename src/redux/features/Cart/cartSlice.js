import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify";
const initialState = [];

export const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers: {
        addFood:(state, action) => {
// check if food is present in the cart, we use the find method.
        const foodInCart = state.find((item) => item.id === action.payload.id)
        let cartItems = JSON.parse(localStorage.getItem("cartItems")) || []
        const localFoodInCart = cartItems.find((item) => item.id === action.payload.id)

        if (!foodInCart){
         if(!localFoodInCart) {
          action.payload.count = 1
          // state.push({...action.payload })
          cartItems.push(action.payload)
          localStorage.setItem("cartItems", JSON.stringify(cartItems))
             toast.success(
                 "added to cart successfully",
                 {
                   position: "top-center",
                 }
               );
         } 
         else {
          toast.error(
            "item already added to cart",
            {
              position: "top-center",
            }
          );
         }
        }
        else {
          toast.error(
            "item already added to cart",
            {
              position: "top-center",
            }
          );
         }
    },

    removeFood:(state, action) => {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || []
    const updatedCartItems = cartItems.filter((item) => item.id !== action.payload.id);
    // let index = state.findIndex((item) => item.id == action.payload.id);
    // state = "";
    // state = state.filter((item) => item.id !== action.payload.id);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems))
    toast.success(
      "item removed from cart successfully",
      {
        position: "top-center",
      }
    );
    },

    loadFoodItems:(state, action) => {
      // ...state,
      cart: [...action.payload]
    }

    }
});
  export const { addFood,  removeFood } = cartSlice.actions

  export const selectAllItemsInCart = (state) => state.cart.cart;

 export default cartSlice.reducer;
