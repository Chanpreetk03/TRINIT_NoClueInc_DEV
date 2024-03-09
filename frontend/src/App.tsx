import React from "react";
import {useAuth,} from "@clerk/clerk-react";
import Navbar from "@/components/Navbar.tsx";
import {HomePage} from "@/routes/home-page.tsx";

const Root = () => {
    const {getToken} = useAuth();
    const token = getToken().then((token) => {
        console.log(token);
        return token;
    });
    console.log(token);
    return (
        <React.StrictMode>
            <Navbar/>
            <HomePage/>
        </React.StrictMode>
    );
};
export default Root;
