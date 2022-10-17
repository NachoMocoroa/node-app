import { useState, useEffect } from 'react';
import { UserData, ErrorsForm } from '../../models/interfaces';

const useForm = (
  initialState: UserData, 
  initialFormErrors: ErrorsForm, 
  callback: any, 
  validate: any
) => {

  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState(initialFormErrors);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const valid = Object.keys(errors).length === 0 && isSubmitting;
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  const reset = () => {
    setValues( initialState );
  };

  const handleFormSubmit = (e: { preventDefault: () => void; }) => {
    if(e) e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setValues(values => ({ ...values, [e.target.name]: e.target.value }));
  };

  return {
    handleChange, 
    handleFormSubmit, 
    reset, 
    values, 
    errors
  }
};

export default useForm;