import { ErrorsForm } from "../../models/interfaces";

export const validate = (values: ErrorsForm) => {

  let errors = {
    email: '',
    password: ''
  };
  let isValidEmail = false;
  let isValidPassword = false;
  const passwordMinLength = 4;

  if (!values.email) {
    errors.email = 'Email address is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  } else {
    isValidEmail = true;
  }

  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < passwordMinLength) {
    errors.password = `Password must be ${passwordMinLength} or more characters`;
  } else {
    isValidPassword = true;
  }

  return (isValidEmail && isValidPassword) ? {} : errors;
};
