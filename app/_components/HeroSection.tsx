"use client"
import { Button } from '@/components/ui/button'
import { GitHubLogoIcon, LinkedInLogoIcon, PaperPlaneIcon, ResumeIcon } from '@radix-ui/react-icons'
import { FileTextIcon, PaperclipIcon } from 'lucide-react'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

function HeroSection() {
    return (
        <main className="flex flex-col items-center justify-center text-center p-6 md:flex-row md:text-left md:space-x-6 h-screen bg-[url('/src/images/ruxe-cover.png')] bg-right md:bg-center">
            <div className="md:w-full md:ml-[100px] ">
                <h1 className="text-4xl md:text-6xl font-bold">
                    <TypeAnimation
                        sequence={[
                            "Hello, I'm Ruxe", 200
                        ]}
                        repeat={Infinity}
                        // cursor={false}
                    />
                </h1>
                <h6 className="text-1xl md:text-2xl font-bold"><TypeAnimation
                        sequence={[
                            "Full Stack Web Developer", 300,
                            "Front-End Developer", 600,
                            "Back-End Developer", 900,
                        ]}
                        repeat={Infinity}
                        // cursor={false}
                    /></h6>
                <p className="mt-4 text-lg md:text-xl text-gray-400 md:w-1/2">
                    <TypeAnimation
                    sequence={[
                        "a proud BSIT graduate from Misamis University with a solid background in web development. I am deeply committed to ongoing learning and professional development.", 300
                    ]}
                    speed={70}
                    />
                </p>
                <div className="md:flex mt-6 space-x-4">
                <Button className="border border-red-400 text-red-400 px-6 py-3 transition-colors duration-300 hover:bg-red-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50">
  <FileTextIcon className='mr-2 h-4 w-4'/> Resume
</Button>
<Button className="border border-red-400 text-red-400 px-6 py-3 transition-colors duration-300 hover:bg-red-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50">
  <GitHubLogoIcon className='mr-2'/> GitHub
</Button>
<Button className="border border-red-400 text-red-400 px-6 py-3 mt-4 lg:mt-0 transition-colors duration-300 hover:bg-red-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50">
  <LinkedInLogoIcon className="mr-2 h-4 w-4" /> LinkedIn
</Button>

                </div>
            </div>
        </main>
    )
}

export default HeroSection
