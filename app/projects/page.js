import Link from 'next/link';
import ProjectCard from '@/app/projects/data.js';
import { projects } from '@/app/projects/data.js';

export default function Projects() {
    return (
        <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">

            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-32 right-20 w-96 h-96 bg-gradient-to-br from-blue-500/8 to-indigo-500/8 rounded-full blur-3xl animate-pulse"></div>
            </div>
            <div className="absolute top-8 left-8 z-20">
                <Link href="/" className="flex items-center text-gray-300 hover:text-purple-400 transition-colors">
                    <span className="mr-2 text-2xl">←</span>
                    <span>Back to Magic Realm</span>
                </Link>
            </div>
            <div className="relative z-10 container mx-auto px-4 py-20">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent mb-4">
                        Spell Book / Projects
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        A collection of magical digital creations, each crafted with code and creativity
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </div>
    );
}