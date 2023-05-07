import React from 'react'
import FreeRegistrationForm from './FreeRegistrationForm'
import PaidRegistrationForm from './PaidRegistrationForm'

// Styles Import
import "./freeRegistration.scss"


const Registration = ({count}) => {



  return (

    <> 
    <div className='RegPage'>
        <div className="imageWrapper">
            <img src="https://ik.imagekit.io/blessme247/Bolebration/registerImg.jpg" alt="bole (plantain)" />
        </div>
        
            {/* {count <   2501 && <FreeRegistrationForm />}
            {count >=   2501 && <PaidRegistrationForm />} */}

            <PaidRegistrationForm />

    </div>
            

    </>
  )
}

export default Registration