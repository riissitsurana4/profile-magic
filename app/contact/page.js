import React from "react";
import Link from "next/link";

export default function Contact() {
    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items center justify-center p-6">
            <div className="absolute top-8 left-8 z-20">
                <Link href="/" className="flex items-center text-gray-300 hover:text-purple-400 transition-colors">
                    <span className="mr-2 text-2xl">←</span>
                    <span>Back to Magic Realm</span>
                </Link>
            </div>
            <div className="text-center">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent mb-4">
                    Get in touch
                </h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                    Whether you have a question, a project idea, or just want to say hello, feel free to reach out!
                </p>
            </div>
        </div>
    )
}