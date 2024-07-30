"use client"
import { Button } from '@/components/ui/button';
import { MenuIcon } from 'lucide-react';
import React, { useState, useEffect } from 'react';

function Header() {
    const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMobileNav = () => {
        setIsMobileNavVisible(!isMobileNavVisible);
    };

    return (
        <header className={`z-50 flex justify-between items-center md:px-[100px] md:py-[30px] p-6 transition-all duration-300 ease-in-out ${isScrolled ? 'fixed top-0 left-0 right-0 bg-black shadow-md' : ''}`}>
            <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold"><span className="text-2xl font-bold text-red-400">Ruxe</span>P</span>
            </div>
            <div className="md:hidden">
                <Button variant="ghost" size="icon" className="rounded-full" onClick={toggleMobileNav}>
                    <MenuIcon className={`w-6 h-6 transition-transform duration-300 ease-in-out ${isMobileNavVisible ? 'rotate-90' : ''}`} />
                </Button>
            </div>
            <nav className="hidden md:flex space-x-6 text-lg">
                <a href="#" className="transition-colors duration-300 hover:text-red-400">
                    Home
                </a>
                <a href="#" className="transition-colors duration-300 hover:text-red-400">
                    About Me
                </a>
                <a href="#" className="transition-colors duration-300 hover:text-red-400">
                    Service
                </a>
                <a href="#" className="transition-colors duration-300 hover:text-red-400">
                    Projects
                </a>
                <a href="#" className="transition-colors duration-300 hover:text-red-400">
                    Contact
                </a>
                
            </nav>
            <div className={`md:hidden absolute top-16 left-0 w-full bg-black py-4 px-6 space-y-4 transition-transform duration-300 ease-in-out ${isMobileNavVisible ? 'block' : 'hidden'}`}>
                <a href="#" className="transition-colors duration-300 block hover:text-red-400">
                    Home
                </a>
                <a href="#" className="transition-colors duration-300 block hover:text-red-400">
                    About Me
                </a>
                <a href="#" className="transition-colors duration-300 block hover:text-red-400">
                    Service
                </a>
                <a href="#" className="transition-colors duration-300 block hover:text-red-400">
                    Projects
                </a>
                <a href="#" className="transition-colors duration-300 block hover:text-red-400">
                    Blog
                </a>
                <a href="#" className="transition-colors duration-300 block hover:text-red-400">
                    Contact
                </a>
            </div>
        </header>
    );
}

export default Header;
