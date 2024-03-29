import {CardTitle, CardDescription, CardHeader, CardContent, Card} from "@/components/ui/card"
import {Button} from "@/components/ui/button"
import {useNavigate} from "react-router-dom";
import {useUser} from "@clerk/clerk-react";

export function Dashboard1() {
    const navigate = useNavigate();
    const {user} = useUser();
    return (
        <Card>
            <CardHeader className="flex flex-col md:flex-row items-center gap-4 md:items-start md:gap-6">
                <div className="flex items-center gap-2">
                    <img
                        alt="Avatar"
                        className="rounded-full"
                        height="96"
                        src={user?.imageUrl}
                        style={{
                            aspectRatio: "96/96",
                            objectFit: "cover",
                        }}
                        width="96"
                    />
                    <div className="grid gap-1">
                        <CardTitle>{user?.fullName}</CardTitle>
                        <CardDescription>English Teacher</CardDescription>
                    </div>
                </div>
                <Button className="ml-auto md:order-first" size="sm" onClick={() => {
                    navigate('/teacher-signup')
                }}>
                    Edit Profile
                </Button>
            </CardHeader>
            <CardContent className="flex flex-col md:flex-row items-start gap-4 md:items-center md:gap-8">
                <div className="grid gap-1">
                    <CardTitle>About Me</CardTitle>
                    <CardDescription>I love teaching English and helping my students become confident
                        speakers.</CardDescription>
                </div>
                <dl className="grid gap-4 text-sm md:grid-cols-2 lg:gap-0">
                    <div className="flex flex-col gap-1">
                        <dt className="font-medium">Name</dt>
                        <dd>{user?.fullName}</dd>
                    </div>
                    <div className="flex flex-col gap-1">
                        <dt className="font-medium">Email</dt>
                        <dd>{user?.primaryEmailAddress?.emailAddress}</dd>
                    </div>
                    <div className="flex flex-col gap-1">
                        <dt className="font-medium">Location</dt>
                        <dd>New York, NY</dd>
                    </div>
                    <div className="flex flex-col gap-1">
                        <dt className="font-medium">Subjects</dt>
                        <dd>English, Literature</dd>
                    </div>
                </dl>
            </CardContent>
        </Card>
    )
}
