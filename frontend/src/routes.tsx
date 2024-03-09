import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage"; // Import your page components
import PrivateRoute from "./components/comps/PrivateRoute"; // Import your PrivateRoute component


interface RouteConfig {
    element: React.ReactNode;
    path: string;
}

const routes: RouteConfig[] = [
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/protected",
        element: (
            <PrivateRoute>
                // Replace with your protected component
            </PrivateRoute>
        ),
    },
];

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                {routes.map((route) => (
                    <Route key={route.path} {...route} />
                ))}
            </Routes>
        </Router>
    );
}
