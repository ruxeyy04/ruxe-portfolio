'use client'
import React, { useCallback } from 'react'
import { SkillsChart } from './SkillsChart'

export default function AboutMe() {


    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 space-y-8 bg-white">

        <div className="flex flex-col items-center justify-center md:flex-row md:space-x-8">
          <div className="w-full max-w-sm">
            <img src="/src/images/pasok.jpg" alt="Professional Design" className="object-cover w-full h-auto rounded-md" />
          </div>
          <div className="w-full max-w-lg space-y-4">
            <h1 className="text-4xl font-bold leading-tight text-black">
              Juan Cruz
            </h1>
            <p className="text-gray-600">
            Hello, I’m Ruxe Pasok, a proud BSIT graduate from Misamis University with a solid background in web development. I am deeply committed to ongoing learning and professional development. My unwavering dedication, enthusiasm, and flexibility allow me to embrace new challenges and make significant contributions to any team. Beyond web development, I am adept at adapting to new technologies and software programming. I am passionate about utilizing my skills to develop innovative solutions and excel in dynamic settings. I believe in the strength of teamwork and am excited to bring my expertise and positive mindset to new and exciting projects.
            </p>
            {/* <div className="flex items-center space-x-2">
              <span className="text-5xl font-bold text-pink-500">3</span>
              <span className="text-lg font-medium text-gray-600">Years of Experience</span>
            </div> */}
          </div>
        </div>
        {/* <SkillsChart/> */}
        {/* <div className="flex flex-wrap justify-center gap-8">
          <div className="flex flex-col items-center space-y-2">
            <div className="relative">
              <svg className="w-24 h-24">
                <circle
                  cx="50%"
                  cy="50%"
                  r="45%"
                  stroke="currentColor"
                  strokeWidth="5"
                  fill="none"
                  className="text-gray-200"
                />
                <circle
                  cx="50%"
                  cy="50%"
                  r="45%"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  className="text-red-400"
                  strokeDasharray="135"
                  strokeDashoffset="67.8582"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-xl font-bold text-red-400">
                80%
              </span>
            </div>
            <span className="text-lg text-black">Design Process</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="relative">
              <svg className="w-24 h-24">
                <circle
                  cx="50%"
                  cy="50%"
                  r="45%"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  className="text-gray-200"
                />
                <circle
                  cx="50%"
                  cy="50%"
                  r="45%"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  className="text-pink-500"
                  strokeDasharray="113.097"
                  strokeDashoffset="45.2388"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-xl font-bold text-pink-500">
                60%
              </span>
            </div>
            <span className="text-lg text-black">Phototype</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="relative">
              <svg className="w-24 h-24">
                <circle
                  cx="50%"
                  cy="50%"
                  r="45%"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  className="text-gray-200"
                />
                <circle
                  cx="50%"
                  cy="50%"
                  r="45%"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  className="text-pink-500"
                  strokeDasharray="113.097"
                  strokeDashoffset="56.5485"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-xl font-bold text-pink-500">
                50%
              </span>
            </div>
            <span className="text-lg text-black">UX Thinking</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="relative">
              <svg className="w-24 h-24">
                <circle
                  cx="50%"
                  cy="50%"
                  r="45%"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  className="text-gray-200"
                />
                <circle
                  cx="50%"
                  cy="50%"
                  r="45%"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  className="text-pink-500"
                  strokeDasharray="113.097"
                  strokeDashoffset="11.3097"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-xl font-bold text-pink-500">
                90%
              </span>
            </div>
            <span className="text-lg text-black">Developing</span>
          </div>
        </div> */}
      </div>
    )
  }

