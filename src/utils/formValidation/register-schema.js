import * as yup from "yup";

export let registerSchema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().required(),
    gender: yup.string(),
  });

  export let paidRegisterSchema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().required(),
    ticketType: yup.string().required(),
    quantity: yup.string().required(),
  });