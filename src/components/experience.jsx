import React, { useState } from 'react'
import experiences from '../assets/experiences.json';
import education from '../assets/educations.json';

const ExperienceCard = ({ experience }) => (
    <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 flex flex-col hover:scale-[1.01] hover:shadow-purple-500/30 transition-all duration-300 shadow-lg shadow-purple-500/10 group">
        <div className='flex justify-between items-start mb-4 gap-4'>
            <div className="flex-1">
                <h2 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-300 transition-colors">
                    {experience.title}
                </h2>
                <h3 className="text-l font-medium text-purple-400">
                    {experience.company}
                </h3>
            </div>
            <p className="text-gray-400 text-sm whitespace-nowrap">
                {experience.duration}
            </p>
        </div>
        <ul className="space-y-2 text-gray-300">
            {experience.responsibilities.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1.5 text-xs">▹</span>
                    <span className="flex-1">{item}</span>
                </li>
            ))}
        </ul>
    </div>
);

const EducationCard = ({ education }) => (
    <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 flex flex-col hover:scale-[1.01] hover:shadow-cyan-500/30 transition-all duration-300 shadow-lg shadow-cyan-500/10 group">
        <div className='flex justify-between items-start gap-4'>
            <div className="flex-1">
                <h2 className="text-xl font-semibold mb-2 text-white group-hover:text-cyan-300 transition-colors">
                    {education.degree}
                </h2>
                <h3 className="text-l font-medium text-cyan-400">
                    {education.institution}
                </h3>
            </div>
            <p className="text-gray-400 text-sm whitespace-nowrap">
                {education.duration}
            </p>
        </div>
        {education.gpa && (
            <p className="text-gray-300 mt-3 text-sm">
                <span className=" font-medium">GPA  {education.gpa}</span>
            </p>
        )}
    </div>
);

function Experience() {
    const [activeTab, setActiveTab] = useState('experience');
    
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-white relative overflow-hidden pb-10 pt-[120px]">
            <section className="p-10 rounded-xl shadow-md max-w-6xl w-full mx-4 backdrop-blur-2xl bg-black/40 border border-white/30">
                <div className="mb-8">
                    <h1 className="mb-6 border-blue-400 pl-4 text-3xl font-bold text-transparent bg-clip-text bg-white border-l-4">
                        My Experiences
                    </h1>
                </div>
                <div className="flex gap-4 mb-8 border-b border-white/20">
                    <button
                        onClick={() => setActiveTab('experience')}
                        className={`px-6 py-3 font-semibold transition-all duration-300 relative ${
                            activeTab === 'experience'
                                ? 'text-purple-400'
                                : 'text-gray-400 hover:text-white'
                        }`}
                    >
                        Experience
                        {activeTab === 'experience' && (
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-purple-400"></div>
                        )}
                    </button>
                    <button
                        onClick={() => setActiveTab('education')}
                        className={`px-6 py-3 font-semibold transition-all duration-300 relative ${
                            activeTab === 'education'
                                ? 'text-cyan-400'
                                : 'text-gray-400 hover:text-white'
                        }`}
                    >
                        Education
                        {activeTab === 'education' && (
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-cyan-400"></div>
                        )}
                    </button>
                </div>

                {/* Content */}
                <div className="relative max-w-5xl mx-auto py-2">
                    {activeTab === 'experience' ? (
                        <>
                            <div className="absolute left-0 top-0 w-1 bottom-10 bg-gradient-to-b from-purple-500/30 via-purple-400/20 to-purple-600/30"></div>
                            {experiences.map((experience, index) => (
                                <div key={index} className="mb-10 flex items-center relative">
                                    <div className="absolute -translate-x-1/2 w-6 h-6 bg-purple-500 border-4 border-purple-300 rounded-full z-10 shadow-lg shadow-purple-500/40"></div>
                                    <div className="ml-12 flex-1">
                                        <ExperienceCard experience={experience} />
                                    </div>
                                </div>
                            ))}
                        </>
                    ) : (
                        <>
                            <div className="absolute left-0 top-0 w-1 bottom-10 bg-gradient-to-b from-cyan-500/30 via-cyan-400/20 to-cyan-600/30"></div>
                            {education.map((edu, index) => (
                                <div key={index} className="mb-10 flex items-center relative">
                                    <div className="absolute -translate-x-1/2 w-6 h-6 bg-cyan-500 border-4 border-cyan-300 rounded-full z-10 shadow-lg shadow-cyan-500/40"></div>
                                    <div className="ml-12 flex-1">
                                        <EducationCard education={edu} />
                                    </div>
                                </div>
                            ))}
                        </>
                    )}
                </div>
            </section>
        </div>
    )
}

export default Experience