// This function will notify the user of debit card payment option not available

import React from "react";
// import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";




const redirect = (loc) => {
  window.location = loc;
}



export const notifyUser = ()=> {
    Swal.fire({
        position: "center",
        icon: "info",
        title:
          "This Payment Option is currently unavailable, Please use the transfer option",
        showConfirmButton: true,
        timer: 4000,
      });
}

export const NotifyUserAfterOrderTransfer = ({ position, icon, title, timer, director })=> {

  // const navigate = useNavigate()

    Swal.fire({
      position: position || "center",
      icon: icon || "info",
      title,
      showConfirmButton: true,
      timer: timer || 3500,
    }).then(() => {
      localStorage.removeItem("cartItems")
      redirect(director);
    });

    console.log("Componentfireeeeeed")

    return (
      <div>
        
      </div>
    )
    
}
















export const OptionNotifier = async({ position, icon, title, timer, director, values })=> {
  // a

  // const navigate = useNavigate()


  const inputOptions = new Promise((resolve) => {
      setTimeout(() => {
        resolve(values)
      }, 1000)
    })

  console.log(values)

  const { value: transitor } = await Swal.fire({
    title,
    icon: icon || "info",
    position : position || "center",
    input: 'radio',
    inputOptions: inputOptions,
    inputValidator: (value) => {
      if (!value) {
        return 'You need to choose something!'
      }
    }
  })

  // if (transitor) {
  //   switch (transitor) {
  //     case "yes":
  //       navigate("/order")
  //       break;
  //     case "no":
  //       navigate("/")
  //       break;
    
  //     default:
  //       break;
  //   }
  // }

 if (transitor) {
  localStorage.removeItem("userPaidRegDetails")
    if (transitor == "yes") {
      redirect(director.yes)
    } else if (transitor == "no") {
      console.log("workingggg")
      redirect(director.no)
    }
}

  return (
    <></>
  )
} 



// const inputOptions = (values) => {
//   new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//         '#ff0000': 'Red',
//         '#00ff00': 'Green',
//         '#0000ff': 'Blue'
//       })
//     }, 1000)
//   })
// }

// const { value: transitor } = await Swal.fire({
//   title: 'Select transitor',
//   input: 'radio',
//   inputOptions: inputOptions,
//   inputValidator: (value) => {
//     if (!value) {
//       return 'You need to choose something!'
//     }
//   }
// })

// if (transitor) {
//   Swal.fire({ html: `You selected: ${color}` })
// }