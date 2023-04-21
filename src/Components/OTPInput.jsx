import React from 'react'
import PinInput from 'react-pin-input';


const OTPInput = ({payload}) => {
  return (

<div style={{ marginLeft: "-12px"}}> 
<PinInput 
  length={6} 
  initialValue=""
  secret
  secretDelay={500} 
  onChange={(value, index) => {}} 
  type="numeric" 
  inputMode="number"
  style={{padding: '10px'}}  
  inputStyle={{borderColor: '#D18E0C', borderBottom: "2px solid #F18403" }}
  inputFocusStyle={{ borderBottom: "1px solid #F18403"}}
  onComplete={(value, index) => {payload(value)}}
  autoSelect={true}
  regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
/>

</div>
  )
}

export default OTPInput