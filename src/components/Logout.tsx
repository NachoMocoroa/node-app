import React from 'react';
import { useAuthDispatch, logout } from '../contexts/auth';

const Logout = () => {
	
	const dispatch = useAuthDispatch();

    const handleLogout = (e: { preventDefault: () => void; }): void => {
		e.preventDefault();
		logout(dispatch);
	};
    
    return (
        <div>
            <div>LOGOUT</div>
            <button onClick={(e) => handleLogout(e)}>Cerrar sesión</button>
        </div>
    );
};

export default Logout;
