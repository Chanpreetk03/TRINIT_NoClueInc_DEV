import React from "react";

interface TwoButtonPageProps {}

const TwoButtonPage: React.FC<TwoButtonPageProps> = () => {
    return (
        <div className="flex flex-col min-h-screen justify-center items-center bg-gray-100">
            <p className="text-xl text-gray-800 mb-8">
                Do you want to expand your horizons by learning new languages or do you want to spread knowledge by teaching people around the world new languages?
            </p>
            <div className="flex space-x-4">
                <button className="btn btn-primary">Student</button>
                <button className="btn btn-secondary">Teacher</button>
            </div>
        </div>
    );
};

export default TwoButtonPage;
