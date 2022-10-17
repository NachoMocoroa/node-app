import React, { useState } from 'react';
import useForm from '../../hooks/useForm/useForm';
import { validate } from '../../hooks/useForm/LoginFormValidationRules';
import { FormUserProps, ErrorsForm, UserData } from '../../models/interfaces';
import Spinner from '../Spinner';

const initialForm: UserData = {
    email: '',
    password: ''
};

const initialFormErrors: ErrorsForm = {
    email: '',
    password: ''
};

const nameEmail = 'email';
const namePassword = 'password';

const FormUser = ({ 
    btnLoginText, 
    btnRegisterText, 
    msgError, 
    isLoading, 
    handleSubmit 
}: FormUserProps) => {
    
    const [checkIsLogin, setCheckIsLogin] = useState<boolean>(false);

    const submitValues = () => {
        handleSubmit(values, checkIsLogin);
    };

    const clickFormSubmit = (
        e: { preventDefault: () => void; }, 
        isLogin: boolean
    ) => {
      e.preventDefault();
      setCheckIsLogin(isLogin);
      handleFormSubmit(e);
    };

    const {
        values,
        errors,
        handleChange,
        handleFormSubmit,
    } = useForm(initialForm, initialFormErrors, submitValues, validate);

    return (
        <form>
            <div className="py-2 px-4">
                {msgError && (
                    <div className="form-group">
                        <p className="alert alert-danger">
                            {msgError}
                        </p>
                    </div>
                )}
                <div className="form-group mt-2">
                    <label htmlFor={nameEmail}>Email</label>
                    <input
                        type='text' 
                        name={nameEmail}  
                        onChange={(e) => handleChange(e)} 
                        disabled={isLoading} 
                        className="form-control" 
                    />
                    {errors?.email && (
                        <p className="alert alert-danger">{errors?.email}</p>
                    )}
                </div>
                <div className="form-group mt-2">
                    <label htmlFor={namePassword}>Password</label>
                    <input
                        type='password' 
                        name={namePassword}  
                        onChange={(e) => handleChange(e)} 
                        disabled={isLoading} 
                        className="form-control" 
                    />
                    {errors.password && (
                        <p className="alert alert-danger">{errors.password}</p>
                    )}
                </div>
                <div className="d-flex flex-column mt-4">
                    <p className="p-2 text-secondary">Select <span className="font-weight-bold">"Login"</span> if you are already registered or select <span className="font-weight-bold">"Register"</span> if you do not have a user yet</p>
                    <div className="d-flex justify-content-between mb-4">
                        <button 
                            type="button" 
                            className="btn btn-primary d-flex justify-content-between align-items-center" 
                            disabled={isLoading} 
                            onClick={(e) => clickFormSubmit(e, true)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
                                <path fillRule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                            </svg>
                            <span style={{marginLeft: 10}}>
                                { btnLoginText }
                            </span>
                        </button>
                        {isLoading && <Spinner />}
                        <button 
                            type="button" 
                            className="btn btn-success d-flex justify-content-between align-items-center" 
                            disabled={isLoading} 
                            onClick={(e) => clickFormSubmit(e, false)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-door-open-fill" viewBox="0 0 16 16">
                                <path d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15H1.5zM11 2h.5a.5.5 0 0 1 .5.5V15h-1V2zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"/>
                            </svg>
                            <span style={{marginLeft: 10}}>
                                { btnRegisterText }
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default FormUser;
