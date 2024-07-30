import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import React from 'react'

function ProjectsPosts() {
  return (
    <section className="mt-12 md:p-36 py-16 bg-[#ffffff]">
    <div className="container mx-auto flex flex-col items-start md:items-center">
      <div className="flex items-center justify-between w-full mb-8">
        <div className="text-left">
          <h2 className="text-4xl font-bold text-black">Recent Projects</h2>
          <p className="text-gray-400 mt-2 ">Check out our recent projects</p>
        </div>
        <Link
          href="#"
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          prefetch={false}
        >
          See More
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
        <div className="bg-gray-800 rounded-md overflow-hidden">
          <img
            src="/placeholder.svg"
            alt="Article 1"
            width={300}
            height={200}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <div className="flex flex-wrap items-center space-x-2 mb-2">
              <Badge variant="secondary" className="px-2 py-1 text-xs m-1 cursor-pointer">
                React
              </Badge>
              <Badge variant="secondary" className="px-2 py-1 text-xs">
                JavaScript
              </Badge>
              <Badge variant="secondary" className="px-2 py-1 text-xs">
                HTML
              </Badge>
              <Badge variant="secondary" className="px-2 py-1 text-xs">
                CSS
              </Badge>
              <Badge variant="secondary" className="px-2 py-1 text-xs">
                Node.js
              </Badge>
              <Badge variant="secondary" className="px-2 py-1 text-xs">
                Tailwind
              </Badge>
              <Badge variant="secondary" className="px-2 py-1 text-xs">
                React Router
              </Badge>
            </div>
            <h3 className="text-lg font-bold mb-2">Building a Responsive Web App with React</h3>
            <p className="text-gray-400 text-sm mb-2">
              Learn how to build a modern, responsive web application using React and the latest web development
              techniques.
            </p>
            <div className="flex items-center space-x-2 text-gray-400 text-xs">
              <span>July 24, 2023</span>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 rounded-md overflow-hidden">
          <img
            src="/placeholder.svg"
            alt="Article 2"
            width={300}
            height={200}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Badge variant="secondary" className="px-2 py-1 text-xs">
                HTML
              </Badge>
              <Badge variant="secondary" className="px-2 py-1 text-xs">
                CSS
              </Badge>
              <span className="text-gray-400 text-xs">August 12, 2023</span>
            </div>
            <h3 className="text-lg font-bold mb-2">DepEd - EHRMS</h3>
            <p className="text-gray-400 text-sm">
              Dive into the core technologies of the web and learn how to build modern, standards-compliant
              websites.
            </p>
          </div>
        </div>
        <div className="bg-gray-800 rounded-md overflow-hidden">
          <img
            src="/placeholder.svg"
            alt="Article 3"
            width={300}
            height={200}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Badge variant="secondary" className="px-2 py-1 text-xs">
                Node.js
              </Badge>
              <Badge variant="secondary" className="px-2 py-1 text-xs">
                Express
              </Badge>
              <span className="text-gray-400 text-xs">September 5, 2023</span>
            </div>
            <h3 className="text-lg font-bold mb-2">MERN Stack Sample Project</h3>
            <p className="text-gray-400 text-sm">
              Learn how to create a robust and scalable RESTful API using Node.js and the Express framework.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default ProjectsPosts
