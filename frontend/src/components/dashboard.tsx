import {Button} from "@/components/ui/button.tsx"
import {CardTitle, CardDescription, CardContent, Card} from "@/components/ui/card.tsx"
import {useUser} from "@clerk/clerk-react";
import {SVGProps} from "react";
import {JSX} from "react/jsx-runtime";
import {Dashboard2} from "@/components/component/dashboard2.tsx";
import {Dashboard1} from "@/components/component/dashboard1.tsx";
import {Dashboard3} from "@/components/component/dashboard3.tsx";

export function Dashboard() {
    const {user} = useUser();
    console.log(user);
    return (
        <div>
            {(user && user.unsafeMetadata.role === "Teacher") ? <div>
                    <Dashboard1/>
                    <Dashboard2/>
                    <Dashboard3/>
                </div> :
                <div className="flex min-h-screen bg-gray-100/40 dark:bg-gray-800/40">
                    {/*<div className="hidden w-60 border-r lg:block">*/}
                    {/*    <div className="flex flex-col h-full">*/}
                    {/*        <a className="flex items-center h-14 justify-center font-semibold" href="#">*/}
                    {/*            Lingua Connect*/}
                    {/*        </a>*/}
                    {/*        <div className="flex items-center h-12 px-6">*/}
                    {/*            <Button className="rounded-full" size="icon" variant="outline">*/}
                    {/*                <LogOutIcon className="w-4 h-4"/>*/}
                    {/*                <span className="sr-only">Logout</span>*/}
                    {/*            </Button>*/}
                    {/*            <Button className="rounded-full ml-auto" size="icon" variant="outline">*/}
                    {/*                <UserIcon className="w-4 h-4"/>*/}
                    {/*                <span className="sr-only">Profile</span>*/}
                    {/*            </Button>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className="flex-1 flex flex-col">
                        {/*<header className="flex items-center h-14 border-b gap-4 px-4 md:gap-6 lg:gap-8 md:px-6">*/}
                        {/*    <Button className="rounded-full" size="icon" variant="ghost">*/}
                        {/*        <MenuIcon className="w-4 h-4"/>*/}
                        {/*        <span className="sr-only">Toggle sidebar</span>*/}
                        {/*    </Button>*/}
                        {/*    <div className="flex-1 font-semibold text-lg">Home</div>*/}
                        {/*    <div>*/}
                        {/*        <div>*/}
                        {/*            <Button*/}
                        {/*                className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"*/}
                        {/*                id="example"*/}
                        {/*                size="icon"*/}
                        {/*                variant="ghost"*/}
                        {/*            >*/}
                        {/*                <BellIcon className="w-4 h-4"/>*/}
                        {/*                <span className="sr-only">Toggle notifications</span>*/}
                        {/*            </Button>*/}
                        {/*        </div>*/}
                        {/*        <div className="w-[300px] overflow-hidden">*/}
                        {/*            <div>Your package has been deployed to the production server</div>*/}
                        {/*            <div>The background job has completed successfully</div>*/}
                        {/*            <div/>*/}
                        {/*            <div>View all notifications</div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    <div>*/}
                        {/*        <div>*/}
                        {/*            <Button*/}
                        {/*                className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"*/}
                        {/*                id="user"*/}
                        {/*                size="icon"*/}
                        {/*                variant="ghost"*/}
                        {/*            >*/}
                        {/*                <img*/}
                        {/*                    alt="Avatar"*/}
                        {/*                    className="rounded-full"*/}
                        {/*                    height="32"*/}
                        {/*                    src="/placeholder.svg"*/}
                        {/*                    style={{*/}
                        {/*                        aspectRatio: "32/32",*/}
                        {/*                        objectFit: "cover",*/}
                        {/*                    }}*/}
                        {/*                    width="32"*/}
                        {/*                />*/}
                        {/*                <span className="sr-only">Toggle user menu</span>*/}
                        {/*            </Button>*/}
                        {/*        </div>*/}
                        {/*        <div>*/}
                        {/*            <div>Profile</div>*/}
                        {/*            <div>Settings</div>*/}
                        {/*            <div/>*/}
                        {/*            <div>Logout</div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</header>*/}
                        <main className="flex-1 flex flex-col gap-4 p-4 md:gap-8 md:p-10">
                            <div className="grid gap-4">
                                <h1 className="font-semibold text-2xl">Welcome back, {user?.firstName}!</h1>
                                <p className="text-gray-500 dark:text-gray-400">
                                    You are making great progress in your language learning journey. Keep up the
                                    good
                                    work!
                                </p>
                            </div>
                            <Card className="p-0">
                                <CardContent className="p-0">
                                    <div className="grid md:grid-cols-[200px_1fr] items-start gap-4 md:gap-8">
                                        <div className="flex flex-col gap-2">
                                            <img
                                                alt="Avatar"
                                                className="rounded-full object-cover"
                                                height="200"
                                                src={user?.imageUrl}
                                                style={{
                                                    aspectRatio: "200/200",
                                                    objectFit: "cover",
                                                }}
                                                width="200"
                                            />
                                            <div className="flex items-center gap-2">
                                                <h2 className="font-semibold">{user?.fullName}</h2>
                                                <span
                                                    className="badge badge-secondary badge-outline">{user?.unsafeMetadata.role as String}</span>
                                            </div>
                                            <Button size="sm">Upgrade</Button>
                                        </div>
                                        <div className="grid gap-4">
                                            <div className="grid gap-2">
                                                <h3 className="font-semibold text-xl">My Courses</h3>
                                                <div className="grid gap-2">
                                                    <Card>
                                                        <CardContent className="flex items-center gap-4">
                                                            <PlayCircleIcon
                                                                className="w-6 h-6 peer-disabled:opacity-50"/>
                                                            <div className="grid gap-1">
                                                                <CardTitle className="text-base">Introduction to
                                                                    Spanish</CardTitle>
                                                                <CardDescription
                                                                    className="text-sm peer-disabled:opacity-70">
                                                                    Start your journey with basic phrases and
                                                                    vocabulary
                                                                </CardDescription>
                                                            </div>
                                                            <ChevronRightIcon
                                                                className="w-4 h-4 ml-auto peer-disabled:opacity-50"/>
                                                        </CardContent>

                                                        <CardContent className="flex items-center gap-4">
                                                            <PlayCircleIcon
                                                                className="w-6 h-6 peer-disabled:opacity-50"/>
                                                            <div className="grid gap-1">
                                                                <CardTitle className="text-base">Intermediate French
                                                                    Grammar</CardTitle>
                                                                <CardDescription
                                                                    className="text-sm peer-disabled:opacity-70">
                                                                    Dive into complex sentence structures and verb
                                                                    conjugations
                                                                </CardDescription>
                                                            </div>
                                                            <ChevronRightIcon
                                                                className="w-4 h-4 ml-auto peer-disabled:opacity-50"/>
                                                        </CardContent>
                                                    </Card>
                                                </div>

                                                <h3 className="font-semibold text-xl">Upcoming Lessons</h3>
                                                <div className="grid gap-2">
                                                    <Card>
                                                        <CardContent className="flex items-center gap-4">
                                                            <CalendarIcon
                                                                className="w-6 h-6 peer-disabled:opacity-50"/>
                                                            <div className="grid gap-1">
                                                                <CardTitle className="text-base">Conversation
                                                                    Practice:
                                                                    Role
                                                                    Play</CardTitle>
                                                                <CardDescription
                                                                    className="text-sm peer-disabled:opacity-70">
                                                                    Improve your speaking skills with interactive
                                                                    dialogues
                                                                </CardDescription>
                                                            </div>
                                                            <ChevronRightIcon
                                                                className="w-4 h-4 ml-auto peer-disabled:opacity-50"/>
                                                        </CardContent>

                                                        <CardContent className="flex items-center gap-4">
                                                            <CalendarIcon
                                                                className="w-6 h-6 peer-disabled:opacity-50"/>
                                                            <div className="grid gap-1">
                                                                <CardTitle className="text-base">Vocabulary
                                                                    Workshop:
                                                                    Idioms and
                                                                    Expressions</CardTitle>
                                                                <CardDescription
                                                                    className="text-sm peer-disabled:opacity-70">
                                                                    Learn common idiomatic phrases and how to use
                                                                    them
                                                                </CardDescription>
                                                            </div>
                                                            <ChevronRightIcon
                                                                className="w-4 h-4 ml-auto peer-disabled:opacity-50"/>
                                                        </CardContent>
                                                    </Card>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </main>
                    </div>
                </div>
            }
        </div>
    )
}


function PlayCircleIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <circle cx="12" cy="12" r="10"/>
            <polygon points="10 8 16 12 10 16 10 8"/>
        </svg>
    )
}


function ChevronRightIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <path d="m9 18 6-6-6-6"/>
        </svg>
    )
}


function CalendarIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
            <line x1="16" x2="16" y1="2" y2="6"/>
            <line x1="8" x2="8" y1="2" y2="6"/>
            <line x1="3" x2="21" y1="10" y2="10"/>
        </svg>
    )
}
