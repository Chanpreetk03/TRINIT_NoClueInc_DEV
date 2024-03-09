import React from "react";
import { Navigate } from "react-router-dom";
import { useClerk } from "@clerk/clerk-react";

interface PrivateRouteProps {
    children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
    const { user } = useClerk();

    if (!user) {
        return <Navigate to="/login" replace />; // Redirect to login
    }

    return children;
};

export default PrivateRoute;
