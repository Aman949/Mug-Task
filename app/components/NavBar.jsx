"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { Link } from 'react-scroll';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='flex justify-evenly items-center p-10 '>
            <Image src='/footerLogo.svg' height={150} width={150} alt='logo' />

            {/* Hamburger icon for mobile screens */}
            <div className="sm:hidden">
                <button onClick={toggleSidebar} className="text-black">
                    ☰
                </button>
            </div>

            {/* Navigation items for larger screens */}
            <div className='hidden sm:flex gap-8 font-medium'>
                {[
                    { title: "Home", id: "home" },
                    { title: "About Me", id: "about" },
                    { title: "Services", id: "services" },
                    { title: "Projects", id: "projects" },
                    { title: "Testimonials", id: "testimonials" },
                    { title: "Contact", id: "contact" },
                ].map((item, index) => (
                    <Link
                        key={index}
                        to={item.id}
                        smooth={true}
                        duration={500}
                        className='cursor-pointer'
                    >
                        {item.title}
                    </Link>
                ))}
            </div>

            {/* Button for larger screens */}
            <div className='hidden sm:block'>
                <button className='text-white bg-[#ff6300] rounded-sm p-2'>Download CV</button>
            </div>

            {/* Sidebar for mobile screens */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-[#F8F8F8] p-4 transform ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                } transition-transform duration-300 ease-in-out z-50 sm:hidden`}
            >
                <button onClick={toggleSidebar} className="mb-6">
                    ✖
                </button>
                <ul className="flex flex-col gap-4">
                    {[
                        { title: "Home", id: "home" },
                        { title: "About Me", id: "about" },
                        { title: "Services", id: "services" },
                        { title: "Projects", id: "projects" },
                        { title: "Testimonials", id: "testimonials" },
                        { title: "Contact", id: "contact" },
                    ].map((item, index) => (
                        <li
                            key={index}
                            className='cursor-pointer'
                            onClick={() => {
                                toggleSidebar();
                                document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            {item.title}
                        </li>
                    ))}
                </ul>
                <button className='mt-8 text-white bg-[#ff6300] rounded-sm p-2 w-full'>
                    Download CV
                </button>
            </div>
        </nav>
    );
};

export default NavBar;
