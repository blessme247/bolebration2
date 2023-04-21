
import {  useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import Order from "./Pages/Order/Order";
import { getFreeTicketCount } from "./utils/getCount";
import Registration from "./Pages/Registration/Registration";
import { ToastContainer } from "react-toastify";
import NoFreeTicket from "./Pages/NoFreeTicket/NoFreeTicket";
import "react-toastify/dist/ReactToastify.css";
import OrderPayment from "./Pages/OrderPayment/OrderPayment";
import TicketPayment from "./Pages/TicketPayment/TicketPayment";


function App() {

  const [count, setCount] = useState()

  useEffect(()=>{
    getFreeTicketCount().then((data)=>{
      setCount(data.count)
      console.log(count)
    })
  }, [])

  return (

    <> 
    <ToastContainer autoClose={2000} pauseOnHover theme="dark" />
    
    <Routes> 
       <Route path="/" element={<Homepage count={count}  />}/> 
       <Route path="/registration"  element={<Registration count={count} />}/> 
       <Route path="/order" element={<Order />}/> 
       <Route path="/ordercheckout" element={<OrderPayment />}/> 
       <Route path="/ticketcheckout" element={<TicketPayment />}/> 
       <Route path="/freeticketexhausted" element={<NoFreeTicket />}/> 
      
     </Routes> 

     </>
   
  )
}

export default App
