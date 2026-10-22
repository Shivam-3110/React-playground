import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';

function PublicProtected() {
    const { user } = useSelector((store) => store.auth);

    if (user) {
        return <Navigate to="/main" replace />;
    }

    return <Outlet />;
}

export default PublicProtected;