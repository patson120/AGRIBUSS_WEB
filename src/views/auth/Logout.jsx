// Logout.jsx
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../redux/feature/userSlice';

const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const handleLogout = () => {
            dispatch(logout());
            navigate('/login'); // Redirect to login page
        };

        handleLogout();
    }, [dispatch, navigate]);

    return null; // This component doesn't need to render anything
};

export default Logout;