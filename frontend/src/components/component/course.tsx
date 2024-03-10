import {Calendar} from "@/components/ui/calendar";
import {Link} from "react-router-dom";

export function Course() {
    return (
        <div className="w-full py-6 space-y-6">
            <div className="container space-y-6 px-4 md:px-6">
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold">
                        Mastering the Art of French Cooking
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400">
                        Learn from the best.
                    </p>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:gap-8">
                    <div className="flex items-start space-x-4">
                        <img
                            alt="Image"
                            className="rounded-full"
                            height={120}
                            src="/placeholder.svg"
                            style={{
                                aspectRatio: "120/120",
                                objectFit: "cover",
                            }}
                            width={120}
                        />
                        <div className="space-y-2">
                            <div className="space-y-1">
                                <h2 className="text-xl font-semibold">
                                    Julia Child
                                </h2>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Julia Child was an American cooking teacher,
                                    author, and television personality. She is
                                    recognized for bringing French cuisine to
                                    the American public with her debut cookbook,
                                    Mastering the Art of French Cooking, and her
                                    subsequent television programs.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <h3 className="text-xl font-semibold">Expertise</h3>
                        <p>
                            Julia Child was an American cooking teacher, author,
                            and television personality. She is recognized for
                            bringing French cuisine to the American public with
                            her debut cookbook, Mastering the Art of French
                            Cooking, and her subsequent television programs.
                        </p>
                        <h3 className="text-xl font-semibold">Experience</h3>
                        <p>
                            Julia Child was an American cooking teacher, author,
                            and television personality. She is recognized for
                            bringing French cuisine to the American public with
                            her debut cookbook, Mastering the Art of French
                            Cooking, and her subsequent television programs.
                        </p>
                    </div>
                </div>
                <div className="grid max-w-sm gap-4 md:max-w-3xl">
                    <div className="grid gap-2">
                        <h3 className="text-xl font-semibold">Select a Date</h3>
                        <Calendar
                            className="w-full border-0 shadow-none"
                        />
                    </div>
                    <div className="grid gap-2">
                        <h3 className="text-xl font-semibold">Select a Time</h3>
                        <div className="grid grid-cols-3 gap-2">
                            <Link className="w-full btn btn-outline" to="/meet">
                                10:00 AM
                            </Link>
                            <Link className="w-full btn btn-outline" to="/meet">
                                11:00 AM
                            </Link>
                            <Link className="w-full btn btn-outline" to="/meet">
                                12:00 PM
                            </Link>
                            <Link className="w-full btn btn-outline" to="/meet">
                                1:00 PM
                            </Link>
                            <Link className="w-full btn btn-outline" to="/meet">
                                2:00 PM
                            </Link>
                            <Link className="w-full btn btn-outline" to="/meet">
                                3:00 PM
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
