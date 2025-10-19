import React, { useState } from 'react'
import { ReactTyped } from "react-typed";
import xuanhan from '../assets/xuanhan.jpg'
import { MdOutlineWorkHistory } from "react-icons/md";
import { LuMessageCircleMore } from "react-icons/lu";
import { FaPython, FaHtml5, FaCss3Alt, FaJava, FaReact, FaFigma, FaGithub, FaGitAlt } from "react-icons/fa";
import { SiScikitlearn, SiTensorflow, SiMysql, SiPytorch, SiFlutter, SiAnaconda, SiCplusplus } from "react-icons/si";
import { PiSnowflakeFill } from "react-icons/pi";
import { IoLogoJavascript } from "react-icons/io";
import { DiDjango } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";


function home() {
    const currentyear = new Date().getFullYear();
    const profileData = {
        name: "Chin Xuan Han",
        position: "Data Scientist",
        type: "Intern",
        currentCompany: "Hiredly",
        location: "Ipoh, Perak & Kuala Lumpur",
        experience: "2+ years",
        email: "xuanhanchin@gmail.com",
        phone: "+6010-3891107",
        linkedIn: "https://www.linkedin.com/in/xuanhanchin/",
        age: currentyear - 2004,
        mbti: "INFJ-T",
        nationality: "Malaysian",
        languages: "English, Mandarin, Malay & Cantonese",
        isOpenToWork: false,
        companyLink: "https://hiredly.com/",
        companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa9qqoG0T9QQlLsDoHcXKxqdv4LDHnJXxrcg&s"
    };

    const workStatus = {
        openToWork: {
            label: "Open to Work",
            badge: "🟢 Available for Opportunities",
            description: "Actively seeking new opportunities",
            color: "bg-green-500",
            textColor: "text-green-600",
            bgColor: "bg-green-100",
            borderColor: "border-green-200"
        },
        employed: {
            label: "Currently Employed",
            badge: "🔵 Employed",
            description: "Currently working in",
            color: "bg-blue-500",
            textColor: "text-blue-600",
            bgColor: "bg-blue-100",
            borderColor: "border-blue-200",
        }
    };

    const currentStatus = profileData.isOpenToWork ? workStatus.openToWork : workStatus.employed;

    const skills = [
        { name: "Python", icon: <FaPython className="w-6 h-6 text-blue-400" /> },
        { name: "Anaconda", icon: <SiAnaconda className="w-6 h-6 text-green-400" /> },
        { name: "Scikit-learn", icon: <SiScikitlearn className="w-6 h-6 text-yellow-400" /> },
        { name: "C++", icon: <SiCplusplus className="w-6 h-6 text-blue-400" /> },
        { name: "TensorFlow", icon: <SiTensorflow className="w-6 h-6 text-orange-400" /> },
        { name: "PyTorch", icon: <SiPytorch className="w-6 h-6 text-red-600" /> },
        { name: "HTML5", icon: <FaHtml5 className="w-6 h-6 text-red-400" /> },
        { name: "CSS3", icon: <FaCss3Alt className="w-6 h-6 text-blue-600" /> },
        { name: "JavaScript", icon: <IoLogoJavascript className="w-6 h-6 text-yellow-300" /> },
        { name: "React", icon: <FaReact className="w-6 h-6 text-blue-400" /> },
        { name: "Django", icon: <DiDjango className="w-6 h-6 text-green-600" /> },
        { name: "MySQL", icon: <SiMysql className="w-6 h-6 text-blue-800" /> },
        { name: "Java", icon: <FaJava className="w-6 h-6 text-red-600" /> },
        { name: "Flutter", icon: <SiFlutter className="w-6 h-6 text-blue-400" /> },
        { name: "Figma", icon: <FaFigma className="w-6 h-6 text-pink-400" /> },
        { name: "GitHub", icon: <FaGithub className="w-6 h-6 text-gray-400" /> },
        { name: "Git", icon: <FaGitAlt className="w-6 h-6 text-orange-400" /> },
        { name: "VS Code", icon: <VscVscode className="w-6 h-6 text-blue-400" /> },
        { name: "Snowflake", icon: <PiSnowflakeFill  className="w-6 h-6 text-blue-400" /> },
    ];

    const hobbies = [
        { name: "Badminton", color: "bg-red-500/20 text-red-300" },
        { name: "Basketball", color: "bg-orange-500/20 text-orange-300" },
        { name: "Music", color: "bg-blue-500/20 text-blue-300" },
        { name: "Coding", color: "bg-gray-500/20 text-gray-300" },
        { name: "Gaming", color: "bg-purple-500/20 text-purple-300" },
        { name: "Traveling", color: "bg-green-500/20 text-green-300" },
    ];

    return (
        <div className="gradient-bg min-h-screen flex flex-col items-center justify-center text-white relative overflow-hidden pt-[120px]">
            <section className="grid grid-cols-2 gap-4 items-center px-6 py-15 rounded-xl shadow-lg max-w-6xl w-full mx-4 mb-5 backdrop-blur-2xl bg-black/40 border border-white/30">
                <div className="flex justify-center">
                    <div className="flex flex-col relative group justify-center items-center">
                        <div className="flex flex-col w-80 h-80 justify-center items-center mb-4">
                            <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-blue-400/20 to-purple-500/20 backdrop-blur-xl border border-white/30 flex items-center justify-center transform 
                                            shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70 transition-all duration-500">
                                <img
                                    src={xuanhan}
                                    alt="Chin Xuan Han"
                                    className="w-full h-full object-cover rounded-2xl"
                                />
                            </div>
                        </div>
                        <div className={`${currentStatus.bgColor} ${currentStatus.borderColor} border rounded-xl px-8 py-2 shadow-lg shadow-purple-500/40 hover:shadow-purple-500/70 transition-all duration-500 w-full max-w-[320px]`}
                        >
                            <div className="text-center">
                                <div
                                    className={`inline-flex items-center px-1 text-m font-bold ${currentStatus.textColor} pb-1 border-b-2 mb-2`}
                                >
                                    {currentStatus.badge}
                                </div>
                                <div>
                                    {!profileData.isOpenToWork ? (
                                        <div className='flex items-center mb-2'>
                                            <img src={profileData.companyLogo} className='w-10 h-10' />
                                            <p className={`${currentStatus.textColor} text-sm font-semibold text-wrap whitespace-normal break-words`}
                                            >
                                                <span>
                                                    Currently working as <strong className="font-black">{profileData.position}{" "} {profileData.type}</strong>  at{" "}
                                                    <a href={profileData.companyLink} target='_blank'><strong className="font-black">{profileData.currentCompany}</strong></a>
                                                </span>
                                            </p>
                                        </div>
                                    ) : (
                                        <p className={`${currentStatus.textColor} text-sm font-semibold text-wrap whitespace-normal break-words`}
                                        >
                                            <span>
                                                {currentStatus.description}
                                            </span>
                                        </p>
                                    )}
                                </div>
                                {profileData.isOpenToWork ? (
                                    <div className="my-2 space-y-2">
                                        <p className="text-xs text-green-700 font-medium">Interested in:</p>
                                        <div className="flex flex-wrap gap-2 justify-evenly">
                                            <span className="px-2 py-1 bg-green-200 text-green-800 text-xs font-bold rounded-full">
                                                Full-time
                                            </span>
                                            <span className="px-2 py-1 bg-green-200 text-green-800 text-xs font-bold rounded-full">
                                                Remote
                                            </span>
                                            <span className="px-2 py-1 bg-green-200 text-green-800 text-xs font-bold rounded-full">
                                                Contract
                                            </span>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="my-2">
                                        <p className="text-xs font-medium text-blue-700">
                                            Open for networking and future opportunities
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-y-6 text-center mr-10">
                    <div className="space-y-3 text-left">
                        <h1 className="text-6xl font-bold">
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 animate-gradient">
                                {profileData.name}
                            </span>
                        </h1>
                        <div className="text-2xl font-semibold h-12 border-b-6 border-[#3b82f6] pb-1 mb-15">
                            <span className="text-gray-300">I'm a </span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                                <ReactTyped
                                    strings={[
                                        "AI Enthusiast",
                                        "AI Engineer",
                                        "Data Scientist",
                                        "LLM Engineer",
                                        "ML Engineer",
                                        "Problem Solver",
                                        "Fast Learner",
                                        "Tech Lover",
                                    ]}
                                    typeSpeed={80}
                                    backSpeed={50}
                                    backDelay={500}
                                    loop
                                />
                            </span>
                        </div>
                    </div>
                    <p className="text-lg text-justify text-gray-300 max-w-2xl leading-relaxed mb-10">
                        Passionate about AI and data science in the aspects of Machine Learning (ML), Natural Language Processing (NLP), and Image Processing.
                        Mainly skilled in Python, TensorFlow, PyTorch, and data visualization tools. Dedicated to continuous learning and innovation to create impactful solutions and solve real-world challenges.
                    </p>
                    <div className="flex flex-row gap-4 justify-around lg:justify-start">
                        <a
                            href="/projects"
                            className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl hover:shadow-purple-500/30 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative z-10 flex items-center justify-center space-x-2">
                                <span>View My Work</span>
                                <MdOutlineWorkHistory className="w-5 h-5 text-white" />
                            </div>
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                            </div>
                        </a>
                        <a
                            href="/contact"
                            className="group relative px-8 py-4 bg-transparent border-2 border-white/30 hover:border-white/50 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm hover:bg-white/10"
                        >
                            <div className="flex items-center justify-center space-x-2">
                                <span>Get In Touch</span>
                                <LuMessageCircleMore className="w-5 h-5 text-white" />
                            </div>
                        </a>
                    </div>
                </div>
            </section>
            <section className=" p-10 rounded-xl  shadow-md max-w-6xl w-full mx-4 mb-5 backdrop-blur-2xl bg-black/40 border border-white/30">
                <div className="space-y-6 text-left">
                    <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-white border-l-4 border-blue-400 pl-4">
                        About Me
                    </h2>
                    <div className='grid grid-cols-2 p-2 gap-10'>
                        <div>
                            <h3 className="text-2xl font-semibold text-white mb-4">Personal Information</h3>
                            <ul className="space-y-2 text-lg text-gray-200 mt-4 mx-1 pr-25">
                                <li className="grid grid-cols-2">
                                    <span className="font-semibold">Name</span>
                                    <span className='text-justify'>{profileData.name}</span>
                                </li>
                                <li className="grid grid-cols-2">
                                    <span className="font-semibold">Age</span>
                                    <span className='text-justify'>{profileData.age}</span>
                                </li>
                                <li className="grid grid-cols-2">
                                    <span className="font-semibold">MBTI</span>
                                    <span className='text-justify'>{profileData.mbti}</span>
                                </li>
                                <li className="grid grid-cols-2">
                                    <span className="font-semibold">Phone</span>
                                    <span className='text-justify'>{profileData.phone}</span>
                                </li>
                                <li className="grid grid-cols-2">
                                    <span className="font-semibold">Email</span>
                                    <a href={`mailto:${profileData.email}`} className='underline'><span className='text-justify'>{profileData.email}</span></a>
                                </li>
                                <li className="grid grid-cols-2">
                                    <span className="font-semibold">Nationality</span>
                                    <span className='text-justify'>{profileData.nationality}</span>
                                </li>
                                <li className="grid grid-cols-2">
                                    <span className="font-semibold">Address</span>
                                    <span className='text-justify'>{profileData.location}</span>
                                </li>
                                <li className="grid grid-cols-2">
                                    <span className="font-semibold">Languages</span>
                                    <span className='text-justify'>{profileData.languages}</span>
                                </li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-8 justify-between'>
                            <div>
                                <h3 className="text-2xl font-semibold text-white mb-4">
                                    Tech Stacks
                                </h3>
                                <div className="flex flex-wrap gap-3 justify-middle">
                                    {skills.map((skill, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1 hover:bg-white/20 transition-all duration-300 cursor-pointer transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30"
                                        >
                                            {skill.icon}
                                            <span className="text-white">{skill.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold text-white mb-4">Hobbies & Interests</h3>
                                <ul className="flex flex-wrap gap-3">
                                    {hobbies.map((hobby, index) => (
                                        <li
                                            key={index}
                                            className={`px-3 py-1 rounded-lg ${hobby.color} 
                                                    cursor-pointer transition-all duration-300 
                                                    hover:scale-110 hover:shadow-lg hover:shadow-${hobby.color.split(" ")[1]}/40
                                                    shake-hover`}
                                        >
                                            {hobby.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    )
}

export default home