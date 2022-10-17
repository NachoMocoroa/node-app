import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthState } from '../../contexts/auth';
import { AuthStateProps } from '../../contexts/interfaces';
import { NODES } from '../paths';

const PublicRoute = () => {

    const userDetails: AuthStateProps = useAuthState();
    const isAuthenticated: boolean = Boolean(userDetails.token);

    if (isAuthenticated) {
        return <Navigate to={NODES} />;
    }
    
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default PublicRoute;
