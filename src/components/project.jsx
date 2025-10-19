import React, { useState } from "react"
import projects  from "../assets/projects.json"
import config from "../config"

const ProjectCard = ({ project, index }) => {
    return (
        <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 flex flex-col hover:scale-[1.03] hover:shadow-purple-500/30 transition-all duration-300 shadow-lg shadow-purple-500/10 group justify-start">
            <div className="relative w-full h-48 mb-4 overflow-hidden rounded-xl">
                <img
                    src={`${config.imagePath}${project.image[0]}`}
                    className="w-full h-72 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-xl"></div>
            </div>
            <h2 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-300 transition-colors">
                {project.title}
            </h2>
        </div>
    );
};


const FilterButton = ({ label, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`px-6 py-2 rounded-2xl font-medium transition-all duration-300 flex-shrink-0 ${isActive
            ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25'
            : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
            } border border-white/10`}
    >
        {label}
    </button>
);

function Project() {
    const categories = ["All", ...new Set(projects.map(project => project.type))];
    const [searchTerm, setSearchTerm] = useState("")
    const [activeFilter, setActiveFilter] = useState("All")

    const filteredProjects = activeFilter === "All"
        ? projects
        : projects.filter(project => project.category.includes(activeFilter));
    const displayedProjects = filteredProjects.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div className="gradient-bg min-h-screen flex flex-col items-center justify-center text-white relative overflow-hidden pt-[120px]">
            <section className=" p-10 rounded-xl  shadow-md max-w-6xl w-full mx-4 mb-5 backdrop-blur-2xl bg-black/40 border border-white/30">
                <div className="flex justify-between items-center mb-2 relative">
                    <h1 className="mb-6 border-blue-400 pl-4 text-3xl font-bold text-transparent bg-clip-text bg-white border-l-4">
                        My Projects
                    </h1>
                    <input
                        type="text"
                        placeholder="Search projects..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300 w-80"
                    />
                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                        🔍
                    </span>
                </div>
                <div className="mx-auto relative">
                    <div className="flex gap-6 mb-6 items-center justify-between ">
                        <div className="flex gap-3 overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden">
                            {categories.map((category) => (
                                <FilterButton
                                    key={category}
                                    label={category}
                                    isActive={activeFilter === category}
                                    onClick={() => setActiveFilter(category)}
                                />
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className={`grid grid-cols-3 gap-4 `}>
                            {displayedProjects.map((project, index) => (
                                <ProjectCard key={project.id} project={project} index={index} />
                            ))}
                        </div>
                        {displayedProjects.length === 0 && (
                            <div className="text-center py-12 text-gray-400">
                                <p className="text-xl">No projects found matching your criteria.</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Project