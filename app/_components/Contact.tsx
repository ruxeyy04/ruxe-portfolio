
import React from 'react'

import ContactForm from './ContactForm'
function Contact() {
    return (
        <section className="lg:py-32  p-6 lg:px-[20rem]">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="bg-gray-800 rounded-md xl:p-28 lg:p-14 p-6">
                    <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
                    <p className="text-gray-400 mb-6">Let's get in touch to create something new</p>
                    <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                            <PhoneIcon className="w-6 h-6 text-red-400" />
                            <div>
                                <h4 className="text-lg font-medium">Phone</h4>
                                <p className="text-gray-400">09559728867</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <MailIcon className="w-6 h-6 text-red-400" />
                            <div>
                                <h4 className="text-lg font-medium">Email</h4>
                                <p className="text-gray-400">ruxepasok356@ictim.com</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <MapPinIcon className="w-6 h-6 text-red-400" />
                            <div>
                                <h4 className="text-lg font-medium">Address</h4>
                                <p className="text-gray-400">Ozamiz City, Misamis Occidental Philippines 7200</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                   <ContactForm/>
                </div>
            </div>
        </section>
    )
}

export default Contact

function MailIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
    )
}


function MapPinIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    )
}
function PhoneIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    )
}
