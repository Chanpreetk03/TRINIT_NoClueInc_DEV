import React from 'react';
import {SignedIn, SignedOut, SignInButton, useAuth, UserButton} from "@clerk/clerk-react";

const Root = () => {
    const {getToken} = useAuth();
    const token = getToken().then((token) => {
        console.log(token)
        return token;
    });
    console.log(token);
    return (
        <React.StrictMode>
            <Header/>
            <h1>Hello</h1>
        </React.StrictMode>
    );
};

const Header = () => {
    return (
        <>
            <header style={{background: "grey", paddingLeft: "90%"}}>
                <SignedOut>
                    <SignInButton/>
                </SignedOut>
                <SignedIn>
                    <UserButton/>
                </SignedIn>
            </header>
        </>)
}

export default Root;
