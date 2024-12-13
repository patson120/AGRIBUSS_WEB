import React, { createContext, useContext, useEffect, useState } from 'react';

const UserRoleContext = createContext();

export const UserRoleProvider = ({ children }) => {
    let role
    const [userRole, setUserRole] = useState(() => {
        role = JSON.parse(sessionStorage.getItem('agribuss_user_role'))?.label || null;
        return role
    }); // set this based on your login logic
    console.log(userRole)
    
    useEffect(() => {
        // Save the userRole to session storage whenever it changes
        console.log("start")
        if (userRole) {
            sessionStorage.setItem('agribuss_user_role', JSON.stringify({ label: userRole }));
        }
    }, [userRole]);

    return (
        <UserRoleContext.Provider value={{ userRole, setUserRole }}>
            {children}
        </UserRoleContext.Provider>
    );
};

export const useUserRole = () => {
    const context = useContext(UserRoleContext);
    if (!context) {
        throw new Error('useUserRole must be used within a UserRoleProvider');
    }
    return context;
};