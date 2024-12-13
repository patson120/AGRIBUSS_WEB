import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUserRole } from '../context/UseRoleContext';

const ProtectedRoute = ({ children, allowedRoles }) => {
    const { userRole } = useUserRole();
    console.log(userRole)

    if (!userRole) {
        return <Navigate to="/login" />;
    }

    if (!allowedRoles.includes(userRole)) {
        return <Navigate to="/not-authorized" />;
    }

    return children;
};

export default ProtectedRoute;