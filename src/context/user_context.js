import React, { createContext, useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const UserContext = createContext();
export const UserProvider = ({ children }) => {
    const { logout, user, loginWithRedirect } = useAuth0();

    const [myUser, setMyUser] = useState(null);

    useEffect(() => {
        setMyUser(user);
    }, [user]);
    

    return (
        <UserContext.Provider value={{ loginWithRedirect, myUser, logout }}>
            {children}
        </UserContext.Provider>
    );
};