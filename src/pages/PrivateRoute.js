import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const PrivateRoute = ({ children, redirectPath = '/' }) => {
    const { user } = useAuth0();

    return (
        <>
            {user ? children : <Navigate to={redirectPath} replace />}
        </>
    );
};

export default PrivateRoute;
