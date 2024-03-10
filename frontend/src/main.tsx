import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

// Import the layouts
import RootLayout from './layouts/root-layout'
import DashboardLayout from './layouts/dashboard-layout'

// Import the components
import {HomePage} from "@/routes/home-page.tsx";
import ContactPage from './routes/contact'
import SignInPage from './routes/sign-in'
import SignUpPage from './routes/sign-up'
import DashboardPage from './routes/dashboard'
import RoleSignup from "@/routes/role-signup.tsx";
import Explore from "@/routes/explore.tsx";
import TeacherSignup from "@/routes/teacher-signup.tsx";
import Meet from "@/routes/meet.tsx";
// import InvoicesPage from './routes/dashboard.invoices'


const router = createBrowserRouter([
    {
        element: <RootLayout/>,
        children: [
            {path: "/", element: <HomePage/>},
            {path: "/contact", element: <ContactPage/>},
            {path: "/sign-in", element: <SignInPage/>},
            {path: "/sign-up", element: <SignUpPage/>},
            {
                element: <DashboardLayout/>, children: [
                    {
                        path: "/dashboard",
                        element: <DashboardPage/>
                    },
                    {path: "/role-signup", element: <RoleSignup/>},
                    {path: "/explore", element: <Explore/>},
                    {path: "/teacher-signup", element: <TeacherSignup/>},
                    {path: "/contact", element: <ContactPage/>},
                    {path: "/meet", element: <Meet/>}

                ]

            },
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
