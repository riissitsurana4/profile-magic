'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center px-4">
      <div className="absolute top-8 right-8 z-20">
        <Link href="/api/admin/contacts" className="flex items-center">
          <button className="bg-purple-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors">
            Admin Panel
          </button>
        </Link>
      </div>
      <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-gradient-to-br from-purple-200/20 to-pink-200/20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-80 h-80 rounded-full bg-gradient-to-br from-blue-200/20 to-indigo-200/20 blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full bg-gradient-to-br from-pink-200/10 to-purple-200/10 blur-3xl animate-pulse -translate-x-1/2 -translate-y-1/2"></div>

      <div className="relative w-32 h-32 mb-6 group">
        <div className="absolute -inset-4 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-full animate-spin-slow opacity-60"></div>
        <div className="relative w-full h-full">
          <Image
            src="/profile-pic.png"
            alt="Profile Picture"
            className="relative w-full h-full rounded-full shadow-2xl group-hover:scale-105 transition-transform duration-300"
            width={128}
            height={128}
          />
          <div className="absolute top-2 right-2 w-3 h-3 bg-yellow-300 rounded-full animate-ping"></div>
          <div className="absolute bottom-3 left-3 w-2 h-2 bg-pink-300 rounded-full animate-bounce"></div>
        </div>
      </div>
      
      <h1 className="text-5xl md:text-6xl font-light bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-2 text-center">
        RS
      </h1>
      
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 text-center">
        Full Stack Developer & Digital Wizard
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <Link  href="/projects" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium py-3 px-8 rounded-lg text-center min-w-[160px]">
           My Spell Book
        </Link>

        <Link  href="/contact"  className="border-2 border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 text-center min-w-[160px]">
          Contact Me
        </Link>
      </div>
    </div>
  );
}
