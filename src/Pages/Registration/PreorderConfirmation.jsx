import React from 'react'
import "./preOrderModal.scss"
import food1 from "../../assets/Images/menu1.jpg"
import food2 from "../../assets/Images/menu2.jpg"
import food3 from "../../assets/Images/menu3.jpg"
import food4 from "../../assets/Images/menu4.jpg"
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

const PreorderConfirmationModal = () => {

  const openAlert = ()=>{
    Swal.fire({
      position: "center",
      icon: "error",
      title:
        "You too like food, Please try again",
      // showConfirmButton: true,
      timer: 35000,
    })
  }
  return (
    <div className='modalContainer'>
        <div className="modalContent">
          <div className="top">
            <div className="topContent">
              <p className="question">Do you want to pre-order?</p>
              <p className='text'>Don't wait!!!</p>
              <p className='text' >Let's start to order now!</p>
              <button className="checkoutMenuBtn" onClick={openAlert} >Checkout Menu</button>
            </div>
          </div>

          <div className="bottomSection">        
          <div className="bottom">
            <img src={food1} alt="food" />
            <img src={food2} alt="food" />
            <img src={food3} alt="food" />
            <img src={food4} alt="food" />
          </div>

          <div className="homeRedirectText">
            <Link to="/">Go home</Link>
          </div>
          </div>

        </div>
    </div>
  )
}

export default PreorderConfirmationModal;