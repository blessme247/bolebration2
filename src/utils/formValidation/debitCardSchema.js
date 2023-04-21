import * as yup from "yup";



  export let debitCardSchema = yup.object().shape({
    number: yup.string().required(),   //CardNumber
    // expiryMonth: yup.string().required(),
    // expiryYear: yup.string().required(),
    // cvv: yup.string().required(),
    // pin: yup.string().required(),
  });