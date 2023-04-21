import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeFood } from "../../redux/features/Cart/cartSlice";


const OrderItem = ({foodName, price, count, id, food, updateCartList, updateTotal}) => {
  
  // State to update count in the UI, where count is the quantity of food We're ordering
  const [itemCount, setItemCount] = useState(count)

  const dispatch = useDispatch()

  
  // Function to increment order item quantity, it accepts index as a parameter;
  //    Where index stands for the position of the food We're updating in itemsInCart
  const incrementItemCount = (index)=>{
    let itemsInCart = JSON.parse(localStorage.getItem("cartItems")) || []

    // Increment count in the localStorage
    const newCount = itemsInCart[index].count +1;
    itemsInCart[index].count = newCount;

    // Increment count in the UI for consistency with data in the database
    setItemCount(prevCount=> prevCount + 1)

    // Update localStorage with changes in the order item quantity
    localStorage.setItem("cartItems", JSON.stringify(itemsInCart))
    updateTotal(0)
    updateCartList(former => itemsInCart)
  }

  // Function to decrement order item quantity, it accepts index as a parameter;
  //    Where index stands for the position of the food We're updating in itemsInCart
  const decrementItemCount = (index)=>{
    let itemsInCart = JSON.parse(localStorage.getItem("cartItems")) || []

    // Increment count in the localStorage
    const newCount = itemsInCart[index].count - 1;
    itemsInCart[index].count = newCount;

    // Increment count in the UI for consistency with data in the database
    setItemCount(prevCount=> prevCount - 1)

    // Update localStorage with changes in the order item quantity
    localStorage.setItem("cartItems", JSON.stringify(itemsInCart))
    updateTotal(0)
    updateCartList(former => itemsInCart)
  }

  const removeItem = () => {
    dispatch(removeFood(food))


    let itemsInCart = JSON.parse(localStorage.getItem("cartItems")) || []
    updateTotal(0)
    updateCartList(former => itemsInCart)
  }
  return (
    <>
      <div className="order">
        <div className="order_top">
          <div className="foodName">{foodName}</div>
          <div className="price"> {price} </div>
        </div>
        <div className="order_bottom">
          <div className="removeBtn" onClick={removeItem}>X REMOVE  </div>
          <div className="quantity">
            <span onClick={() => decrementItemCount(id)}>-</span>
            <span>{itemCount}</span>
            <span onClick={() => incrementItemCount(id)}>+</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderItem;
