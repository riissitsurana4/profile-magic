import Image from "next/image";

export const projects = [
    {
        id: 1,
        title: "Enchanted Portfolio",
        description: "A magical portfolio website showcasing my projects and skills.",
        image: "/profile-pic.png",
        tags: ["Next.js", "Tailwind CSS", "React"],
        demoLink: "/",
        githubLink: "https://github.com/riissitsurana4/profile-magic",
        status: "Completed",
    },

    {
        id: 2,
        title: "Expense Tracker",
        description: "A expense tracker application to manage your finances.",
        image: "/expensetracker.png",
        tags: ["Next.js", "Bootstrap", "React"],
        demoLink: "https://smartexpensehub.com",
        githubLink: "https://github.com/riissitsurana4/ExpenseTracker",
        status: "Completed",
    },

    {
        id: 3,
        title: "Musical YSWS",
        description: "Website for the Musical YSWS.",
        image: "/musical.png",
        tags: ["Next.js", "Tailwind CSS", "React"],
        demoLink: "https://musical-taupe.vercel.app/",
        githubLink: "https://github.com/riissitsurana4/musical",
        status: "In Progress",
}
];


const ProjectCard = ({ project }) => {
    const { title, description, image, tags, demoLink, githubLink, status } = project;

    return (
        <div className="group bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 overflow-hidden relative">
            {status === "In Progress" && (
                <div className="absolute top-4 right-4 z-20 bg-yellow-500/20 border border-yellow-500/50 rounded-full px-3 py-1 text-xs text-yellow-300">
                    In Progress
                </div>
            )}
            <div className="relative h-48 overflow-hidden">
                <div className="relative w-full h-full">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />  
                </div>
            </div>


            <div className="relative z-10 p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                    {title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {description}
                </p>


                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="px-2 py-1 bg-purple-600/20 border border-purple-500/30 rounded text-purple-300 text-xs"
                        >
                            {tag}
                        </span>
                    ))}
                </div>


                <div className="flex gap-3">
                    <a
                        href={demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-2 px-4 rounded-lg text-sm font-medium transition-all transform hover:scale-105 duration-300"
                    >
                        Live Demo
                    </a>
                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 border border-gray-600 hover:border-purple-500 text-gray-300 hover:text-white text-center py-2 px-4 rounded-lg text-sm font-medium transition-all hover:bg-purple-500/10 duration-300"
                    >
                        Code
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;