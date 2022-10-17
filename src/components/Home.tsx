import React from 'react';
import { Link } from 'react-router-dom';
import { LOGIN, NODES } from '../Routes/paths';
import { useAuthState } from '../contexts/auth';
import { AuthStateProps } from '../contexts/interfaces';

const Home = () => {

    const userDetails: AuthStateProps = useAuthState();
    const isAuthenticated: boolean = Boolean(userDetails.token);
    
    return (
        <div>
            <div>HOME</div>
            {
                isAuthenticated ? 
                    (
                        <Link to={NODES} className="btn btn-outline-light btn-lg">Private section</Link>
                    ) : (
                        <Link to={LOGIN} className="btn btn-outline-light btn-lg">Log in</Link>
                    )
            }
        </div>
    );
};

export default Home;
