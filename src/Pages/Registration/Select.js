// import React from 'react'
// import { Errormessage, Field} from "formik"
// import { dropdownOptions } from './dropDownOptions';

// const Select = (props) => {
//     const {label, name, options,...rest} = props;
//   return (
//     <div className='fromGroup'>
//         <label htmlFor={name}>{label}</label>
//         <Field as ="select" id={name} name={name} {...rest}>
//             {dropdownOptions.map(option => {
//                 return (
//                     <option key={option.value} value={option.value}>{option.key}</option>
//                 )
//             })}
//         </Field>
//         <Errormessage name={name}/>
//     </div>
//   )
// }

// export default Select