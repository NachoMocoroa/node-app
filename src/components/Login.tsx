import React, { useState } from 'react';
import { useAuthState } from '../contexts/auth';

const Login = () => {
    
    const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const { loading, errorMessage } = useAuthState();

	const handleLogin = async (e: { preventDefault: () => void; }) => {
		e.preventDefault();

		try {
			console.log({ email, password });
		} catch (error) {
			console.log(error);
		}
	};
    
    return (
        <div>
            <div>LOGIN</div>
            {errorMessage ? <p>{errorMessage}</p> : null}
            <form>
                <div>
                    <div>
                        <label htmlFor='email'>Username</label>
                        <input
                            type='text'
                            id='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={loading}
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            id='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            disabled={loading}
                        />
                    </div>
                </div>
                <button onClick={handleLogin} disabled={loading}>
                    login
                </button>
            </form>
        </div>
    );
};

export default Login;
