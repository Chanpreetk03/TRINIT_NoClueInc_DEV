import React from 'react';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
    return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
        <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-xl font-bold">Your App Name</h1>
        <ul className="flex space-x-4">
            <li>
            <a href="#" className="text-gray-700 hover:text-gray-900">
                Home
            </a>
            </li>
            <li>
            <a href="#" className="text-gray-700 hover:text-gray-900">
                About
            </a>
            </li>
            <li>
            <a href="#" className="text-gray-700 hover:text-gray-900">
                Contact
            </a>
            </li>
        </ul>
        </nav>

      {/* Hero Section */}
        <section className="hero min-h-screen flex flex-col justify-center items-center px-6">
        <h1 className="text-4xl font-bold text-center text-white mb-8">
            Welcome to Your App!
        </h1>
        <p className="text-xl text-center text-white">
            A brief description of your app and its benefits.
        </p>
        <button className="btn mt-8">Get Started</button>
        </section>

      {/* About Section */}
        <section className="about py-12 px-6">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-gray-700 text-lg">
            A more detailed description about your app, its features, and its mission.
            You can use Shadcn's utility classes to style the content sections.
        </p>
        </section>

      {/* Contact Us Section */}
        <section className="contact py-12 px-6">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-700 text-lg">
            Provide your contact information here. You can use Shadcn's form
            components or build your own form with Tailwind classes.
        </p>
        </section>
    </div>
    );
};

export default HomePage;
