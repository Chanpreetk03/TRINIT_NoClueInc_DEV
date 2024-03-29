import {SVGProps} from "react"
import {JSX} from "react/jsx-runtime"
import {useUser} from "@clerk/clerk-react";
import {useNavigate} from "react-router-dom";

export function RoleSignUp() {
    const {user} = useUser();
    const navigate = useNavigate()
    return (
        <div className="flex flex-col min-h-screen items-stretch">
            <header className="flex items-center justify-center h-[60px] px-4 border-b lg:px-10">
                <div className="flex items-center space-x-2 text-2xl font-bold" onClick={() => {
                    user?.update({
                        unsafeMetadata: {}
                    });
                }}>
                    <LanguagesIcon className="w-6 h-6"/>
                    Lingua Connect
                </div>
            </header>
            <main className="flex flex-col flex-1 items-center justify-center py-6">
                <div className="space-y-6 text-center">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Welcome to Lingua
                        Connect</h1>
                    <p className="mx-auto max-w-[500px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                        Connect with the world through language. Choose your role to get started.
                    </p>
                </div>
                <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center">
                    <a
                        className="inline-flex h-11 items-center justify-center rounded-md bg-[#ff5a5f] px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-[#ff5a5f]90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#ff5a5f]950 disabled:pointer-events-none disabled:opacity-50 dark:bg-[#ff5a5f] dark:text-gray-900 dark:hover:bg-[#ff5a5f]90 dark:focus-visible:ring-gray-300"
                        href="#"
                        onClick={async () => {
                            await user?.update({
                                unsafeMetadata: {
                                    role: "Teacher"
                                }
                            });
                            navigate('/teacher-signup')
                        }}
                    >
                        Teacher
                    </a>
                    <a
                        className="inline-flex h-11 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                        href="#"
                        onClick={async () => {
                            await user?.update({
                                unsafeMetadata: {
                                    role: "Student"
                                }
                            });
                            navigate('/dashboard')
                        }}
                    >
                        Student
                    </a>
                </div>
            </main>
        </div>
    )
}


function LanguagesIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m5 8 6 6"/>
            <path d="m4 14 6-6 2-3"/>
            <path d="M2 5h12"/>
            <path d="M7 2h1"/>
            <path d="m22 22-5-10-5 10"/>
            <path d="M14 18h6"/>
        </svg>
    )
}
