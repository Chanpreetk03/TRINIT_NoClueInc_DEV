import React from "react";
import {
    SignedIn,
    SignedOut,
    SignInButton,
    useAuth,
    UserButton,
} from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import AppRoutes from "./routes";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";

const Root = () => {
    const { getToken } = useAuth();
    const token = getToken().then((token) => {
        console.log(token);
        return token;
    });
    console.log(token);
    return (
        <React.StrictMode>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <ModeToggle />
                <AppRoutes />
                <Header />
                <Button>Hello</Button>
            </ThemeProvider>
        </React.StrictMode>
    );
};

const Header = () => {
    return (
        <>
            <header style={{ background: "grey", paddingLeft: "90%" }}>
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </header>
        </>
    );
};

export default Root;
