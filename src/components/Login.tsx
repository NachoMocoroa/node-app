import React from 'react';
import { manageLogin, useAuthState, useAuthDispatch } from '../contexts/auth';
import { AuthStateProps } from '../contexts/interfaces';
import { UserData } from '../models/interfaces';
import FormUser from './forms/FormUser';

const Login = () => {

	const dispatch = useAuthDispatch();
	const { loading, errorMessage }: AuthStateProps = useAuthState();

	const handleLogin = (params: UserData, isLogin: boolean): void => {
        manageLogin(dispatch, params, isLogin);
	};

    return (
        <div 
            className="w-100 card card-container mx-auto mt-5 col-md-12"
            style={{maxWidth: 500}}
        >
            <h1 className="px-4 pt-4 mb-2 text-center">Login</h1>
            <FormUser 
                btnLoginText="Login" 
                btnRegisterText="Register" 
                msgError={errorMessage} 
                isLoading={loading} 
                handleSubmit={handleLogin} 
            />
        </div>
    );
};

export default Login;
