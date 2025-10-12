import Link from 'next/link';
export default function Blog() {
    return (
        <main className="flex flex-col items-center min-h-screen py-2 bg-gray-900 relative overflow-x-hidden">
            <div className="absolute top-8 left-8 z-20">
                <Link href="/" className="flex items-center text-gray-300 hover:text-purple-400 transition-colors">
                    <span className="mr-2 text-2xl">←</span>
                    <span>Back to Magic Realm</span>
                </Link>
            </div>
            <h1 className="text-4xl md:text-6xl mt-6 font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent mb-4">
                Coming Never!!!
            </h1>
            
        </main>
    );
}