import {CardTitle, CardDescription, CardHeader, CardContent, Card} from "@/components/ui/card"
import {SVGProps} from "react"
import {JSX} from "react/jsx-runtime"

export function Dashboard2() {
    return (
        <Card className="w-full max-w-6xl">
            <CardHeader className="flex flex-row items-start gap-4 p-6">
                <div className="flex flex-col gap-1.5">
                    <CardTitle>Teaching Dashboard</CardTitle>
                    <CardDescription>Manage your teaching schedule for different languages.</CardDescription>
                </div>
            </CardHeader>
            <CardContent className="p-6">
                <div className="grid gap-4 md:grid-cols-2">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                            <div className="grid gap-1.5">
                                <CardTitle className="text-lg font-bold">Spanish Lessons</CardTitle>
                                <CardDescription className="text-sm">You have 10 students learning
                                    Spanish.</CardDescription>
                            </div>
                            <FlagIcon className="w-8 h-8 rounded-lg"/>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-2">
                                <h3 className="font-semibold">Upcoming Lessons</h3>
                                <ul className="grid gap-2">
                                    <li>
                                        <time className="font-semibold">Mar 15:</time>
                                        Basics{"\n                                  "}
                                    </li>
                                    <li>
                                        <time className="font-semibold">Mar 17:</time>
                                        Conversation{"\n                                  "}
                                    </li>
                                    <li>
                                        <time className="font-semibold">Mar 20:</time>
                                        Vocabulary{"\n                                  "}
                                    </li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                            <div className="grid gap-1.5">
                                <CardTitle className="text-lg font-bold">French Lessons</CardTitle>
                                <CardDescription className="text-sm">You have 8 students learning
                                    French.</CardDescription>
                            </div>
                            <FlagIcon className="w-8 h-8 rounded-lg"/>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-2">
                                <h3 className="font-semibold">Upcoming Lessons</h3>
                                <ul className="grid gap-2">
                                    <li>
                                        <time className="font-semibold">Mar 16:</time>
                                        Basics{"\n                                  "}
                                    </li>
                                    <li>
                                        <time className="font-semibold">Mar 18:</time>
                                        Conversation{"\n                                  "}
                                    </li>
                                    <li>
                                        <time className="font-semibold">Mar 21:</time>
                                        Vocabulary{"\n                                  "}
                                    </li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </CardContent>
        </Card>
    )
}


function FlagIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
            <line x1="4" x2="4" y1="22" y2="15"/>
        </svg>
    )
}
