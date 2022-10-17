import React from 'react';
import { Link } from 'react-router-dom';
import { LOGIN, NODES } from '../Routes/paths';
import { useAuthState } from '../contexts/auth';
import { AuthStateProps } from '../contexts/interfaces';

const Home = () => {

    const userDetails: AuthStateProps = useAuthState();
    const isAuthenticated: boolean = Boolean(userDetails.token);

    const wrapperStyle = {
        backgroundImage: `url('https://mdbcdn.b-cdn.net/img/new/slides/041.webp')`, 
        backgroundRepeat: 'no-repeat', 
        backgroundPosition: 'center', 
        backgroundSize: 'cover' 
    };

    const maskStyle = {
        backgroundColor: `rgba(0, 0, 0, 0.6)`
    };
    
    return (
        <section 
            className="w-100 vh-100 d-flex flex-column justify-content-center" 
            style={wrapperStyle}
        >
            <div
                className="mask p-5 h-75" 
                style={maskStyle}
            >
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="text-white text-center">
                        <h1 className="mb-3">Welcome to NodesApp</h1>
                        <h4 className="mb-3">Please continue to Login/ Register.</h4>
                        { isAuthenticated ? (
                            <Link to={NODES} className="btn btn-outline-light btn-lg">Private section</Link>
                        ) : (
                            <Link to={LOGIN} className="btn btn-outline-light btn-lg">Log in</Link>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
