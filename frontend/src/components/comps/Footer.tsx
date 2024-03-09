import React from 'react';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
    return (
    <footer className="bg-gray-800 text-white py-4 px-6 flex justify-center items-center">
        <p>Copyright &copy; {new Date().getFullYear()} Your App Name</p>
    </footer>
);
};

export default Footer;
