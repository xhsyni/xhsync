import React from 'react'

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
function footer() {
    const todayDate = "2025-10-19";
    const githubLink = "https://github.com/xhsyni";
    const linkedInLink = "https://www.linkedin.com/in/xuanhanchin/";
    const instagramLink = "https://www.instagram.com/xuanhan07?utm_source=qr";

    return (
        <footer className="relative bg-gradient-to-b from-[#060025] via-[#200051] to-[#002d7a] pt-8 pb-8 overflow-hidden">
            <div className="relative z-10 max-w-6xl mx-auto px-6">
                <div className="text-center">
                    <h3 className="text-white font-semibold mb-6 text-2xl">Connect With Me</h3>
                    <div className="flex justify-center space-x-8 mb-4">
                        <a href={githubLink}
                            target='_blank'
                            className="group relative w-12 h-12 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                        >
                            <FaGithub className="text-white text-3xl group-hover:text-gray-900 transition-colors duration-300" />
                            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <div className="bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                                    GitHub
                                </div>
                            </div>
                        </a>
                        <a href={linkedInLink}
                            target='_blank'
                            className="group relative w-12 h-12 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 flex items-center justify-center hover:bg-blue-600/20 hover:border-blue-400/30 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                        >
                            <FaLinkedin className="text-white text-3xl group-hover:text-blue-400 transition-colors duration-300" />
                            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <div className="bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                                    LinkedIn
                                </div>
                            </div>
                        </a>
                        <a href={instagramLink}
                            target='_blank'
                            className="group relative w-12 h-12 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 flex items-center justify-center hover:bg-pink-600/20 hover:border-pink-400/30 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                        >
                            <FaInstagram className="text-white text-3xl group-hover:text-pink-400 transition-colors duration-300" />
                            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <div className="bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                                    Instagram
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="flex flex-col items-center justify-between text-sm">
                        <div className="flex items-center space-x-2 mb-4 md:mb-0">
                            <span className="text-gray-400">Made by</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-semibold">
                                Chin Xuan Han v1.0
                            </span>
                            <br />
                        </div>
                        <span className="text-gray-400 mb-1">CopyRight © 2025 (Updated at {todayDate})</span>
                    </div>
                </div>
                <div className="absolute top-10 left-10 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-60"></div>
                <div className="absolute top-20 right-20 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-60" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-20 left-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-ping opacity-60" style={{ animationDelay: '2s' }}></div>
            </div>
        </footer>
    )
}

export default footer