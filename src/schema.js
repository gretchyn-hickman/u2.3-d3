// Here goes the schema for the form
import * as yup from "yup";

const formSchema = yup.object().shape({
  firstName: yup
    .string()
    .trim()
    .required("First Name Required")
    .min(2, "First Name Required"),
  lastName: yup
    .string()
    .trim()
    .required("Last Name Required")
    .min(2, "Last Name Required"),
  email: yup
    .string()
    .email("Valid Email Required")
    .required("Email is required"),
  service: yup.boolean(),
});

export default formSchema;
