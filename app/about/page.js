'use client';
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <main className="flex flex-col items-center min-h-screen py-2 bg-gray-900 relative overflow-x-hidden">
            <div className="absolute top-8 left-8 z-20">
                <Link href="/" className="flex items-center text-gray-300 hover:text-purple-400 transition-colors">
                    <span className="mr-2 text-2xl">←</span>
                    <span>Back to Magic Realm</span>
                </Link>
            </div>
            <motion.h1
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl mt-6 font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent mb-4"
            >
                About Me
            </motion.h1>

            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="relative w-32 h-32 mb-6 mt-4 group"
            >
                <Image
                    src="/profile-pic.png"
                    alt="Profile Picture"
                    className="relative w-full h-full rounded-full shadow-2xl group-hover:scale-105 transition-transform duration-300"
                    width={128}
                    height={128}
                />
            </motion.div>

            <motion.h1
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="text-5xl md:text-6xl font-light bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-2 text-center"
            >
                RS
            </motion.h1>


            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1 }}
                className="text-xl text-gray-300 mb-8 text-center"
            >
                Full Stack Developer(Learner) & Digital Wizard
            </motion.p>


            <motion.section
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.2 }}
                className="w-full max-w-2xl mb-12"
            >
                <h2 className="text-2xl font-bold text-purple-300 mb-4 text-center">Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {["JavaScript", "React", "Node.js", "CSS", "Next.js", "Tailwind", "Python"].map(skill => (
                        <motion.div
                            key={skill}
                            whileHover={{ scale: 1.1, backgroundColor: "#7c3aed" }}
                            className="bg-gray-800 rounded-lg p-4 shadow text-center transition-colors"
                        >
                            <span className="font-semibold text-purple-200">{skill}</span>
                        </motion.div>
                    ))}
                </div>
            </motion.section>


            <motion.section
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.8 }}
                className="w-full max-w-2xl mb-12"
            >
                <h2 className="text-2xl font-bold text-pink-300 mb-4 text-center">Fun Facts</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="bg-gray-800 p-6 rounded-lg shadow text-center"
                    >
                        <span className="text-4xl font-bold text-purple-400">2+</span>
                        <div className="mt-2 text-gray-300">Years Coding</div>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="bg-gray-800 p-6 rounded-lg shadow text-center"
                    >
                        <span className="text-4xl font-bold text-blue-400">4</span>
                        <div className="mt-2 text-gray-300">Projects Launched</div>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="bg-gray-800 p-6 rounded-lg shadow text-center"
                    >
                        <span className="text-4xl font-bold text-pink-400">∞</span>
                        <div className="mt-2 text-gray-300">Cups of Coffee</div>
                    </motion.div>
                </div>
            </motion.section>


            <motion.section
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 2.0 }}
                className="mb-16"
            >
                <h2 className="text-2xl font-bold text-blue-300 mb-4 text-center">Education</h2>
                <div className="max-w-xl mx-auto space-y-4">
                    <div className="bg-gray-800 p-4 rounded-lg shadow">
                        <span className="font-bold text-purple-300">Class XI Science (ISC)</span>
                        <div className="text-gray-300">HHS, 2025-2027</div>
                    </div>
                </div>
            </motion.section>

            <motion.section
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 2.2 }}
                className="mb-16"
            >
                <h2 className="text-2xl font-bold text-pink-300 mb-4 text-center">Courses & Certifications</h2>
                <div className="max-w-xl mx-auto space-y-4">
                    <div className="bg-gray-800 p-4 rounded-lg shadow">
                        <span className="font-bold text-blue-300">Full Stack Web Development</span>
                        <div className="text-gray-300">Coursera, 2025 (In-Progress)</div>
                    </div>
                </div>
            </motion.section>

            <motion.section
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 2.6 }}
                className="w-full max-w-2xl mb-12"
            >
                <h2 className="text-2xl font-bold text-purple-300 mb-4 text-center">Hobbies & Activities</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                   <div
                       className="bg-gray-800 p-6 rounded-lg shadow text-center transition-all duration-300 cursor-pointer"
                   >
                       <div className="mt-2 text-gray-300">Listening to Music</div>
                   </div>
                   <div
                       className="bg-gray-800 p-6 rounded-lg shadow text-center transition-all duration-300 cursor-pointer"
                   >
                       <div className="mt-2 text-gray-300">Playing Games</div>
                   </div>
                   <div
                       className="bg-gray-800 p-6 rounded-lg shadow text-center transition-all duration-300 cursor-pointer"
                   >
                       <div className="mt-2 text-gray-300">Binge Watching Series</div>
                   </div>
                </div>
            </motion.section>
            <motion.section
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 2.4 }}
                className="text-center mt-8"
            >
                <h2 className="text-xl font-bold mb-4 text-purple-400">Connect with Me</h2>
                <div className="flex justify-center gap-8">
                    <motion.a
                        whileHover={{ scale: 1.2, color: "#a78bfa" }}
                        href="mailto:rishitsurana4@gmail.com"
                        className="text-lg text-gray-300 hover:text-purple-400 transition-colors"
                    >
                        Email
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.2, color: "#a78bfa" }}
                        href="https://github.com/riissitsurana4"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg text-gray-300 hover:text-purple-400 transition-colors"
                    >
                        GitHub
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.2, color: "#a78bfa" }}
                        href="https://www.linkedin.com/in/riissit-surana-238007384/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg text-gray-300 hover:text-purple-400 transition-colors"
                    >
                        LinkedIn
                    </motion.a>
                </div>
            </motion.section>
        </main>
    );
}