import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (

    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
      <div className="relative w-32 h-32 mb-6">
        <Image
          src="/profile-pic.png" alt="Profile Picture" className="relative w-full h-full rounded-full shadow-2xl"
          width={128}
          height={128}
        />
        </div>
        <h1 className="text-5xl md:text-6xl font-light bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-2">
          Riissit Surana
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-1">
          Full Stack Developer & Digital Wizard
        </p>

      </div>
  );
}
