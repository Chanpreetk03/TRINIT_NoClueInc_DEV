import {useState} from 'react';
import {Label} from "@/components/ui/label"
import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"
import axios from "axios";

export function TeacherForm() {
    const [experience, setExperience] = useState('');
    const [languages, setLanguages] = useState('');
    const [hours, setHours] = useState('');

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        const response = await axios.get('https://trinit-noclueinc-dev-jntr.onrender.com/v1/health', {
                data: {
                    experience: experience,
                    languages: languages,
                    hours: hours
                }
            }
        )
        console.log(response);
        setExperience('');
        setLanguages('');
        setHours('');
    };

    return (
        <form onSubmit={handleSubmit} className="py-12 bg-gray-50 dark:bg-gray-900">
            <div className="mx-auto grid max-w-7xl gap-6 px-4 lg:px-6">
                <div className="space-y-8">
                    <div className="space-y-2">
                        <h1 className="text-4xl font-extrabold tracking-tight">Teach with Lingua Connect</h1>
                        <p className="max-w-[600px] text-gray-500 dark:text-gray-400">
                            Join our team of passionate educators. Fill out the form below to apply.
                        </p>
                    </div>
                    <div className="grid gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="experience">Teaching experience (years)</Label>
                            <Input id="experience" placeholder="5" required type="number" value={experience}
                                   onChange={(e) => setExperience(e.target.value)}/>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="languages">Languages you speak</Label>
                            <Input id="languages" placeholder="English, Spanish" required value={languages}
                                   onChange={(e) => setLanguages(e.target.value)}/>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="hours">Preferred teaching hours</Label>
                            <Input id="hours" placeholder="9AM-12PM, 3PM-6PM" required value={hours}
                                   onChange={(e) => setHours(e.target.value)}/>
                        </div>
                    </div>
                    <Button type="submit" className="w-full">Apply</Button>
                </div>
            </div>
        </form>
    )
}
