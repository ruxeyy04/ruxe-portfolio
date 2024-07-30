
import React from 'react'
import { LogInIcon } from 'lucide-react'
function Footer() {
    return (
        <footer className="bg-gray-800 py-8 px-6 md:px-12">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center space-x-2">
                     <span className="text-2xl font-bold"><span className='text-2xl font-bold text-red-400'>Ruxe</span>P</span>
                </div>
                <nav className="mt-4 md:mt-0 flex space-x-6 text-gray-400">
                    <a href="#" className="hover:text-pink-500">
                        Home
                    </a>
                    <a href="#" className="hover:text-pink-500">
                        About Me
                    </a>
                    <a href="#" className="hover:text-pink-500">
                        Service
                    </a>
                    <a href="#" className="hover:text-pink-500">
                        Projects
                    </a>
                    <a href="#" className="hover:text-pink-500">
                        Contact
                    </a>
                </nav>
                <p className="mt-4 md:mt-0 text-gray-400 text-sm">&copy; 2024 Ruxe Pasok. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
