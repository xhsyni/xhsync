import React from 'react'
import Navigation from './navigation'
import Home from './home'
import Footer from './footer'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import { FaRobot } from "react-icons/fa6";
import InteractiveBackground from './interactiveBG'
import { useState, useEffect } from 'react'
import Project from './project'
import Experience from './experience'
import Contact from './contact'


function Portfolio() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [message, setMessage] = useState("")

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.pageX, y: e.pageY })
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    function popUpAIChat() {
        setMessage("😢 Stay tuned! Sync AI Chat coming soon...")
        setTimeout(() => {
            setMessage("")
        }, 3000);
    }

    return (
        <>
            <div>
                {message && (
                <div className="fixed bottom-6 left-6 bg-gradient-to-r purple-600 text-white font-medium px-6 py-3 rounded-2xl shadow-lg shadow-purple-400/40 z-50 animate-fade-in-up border border-white/20 backdrop-blur-md">
                    {message}
                </div>
                )}
            </div>
            <Router>
                <InteractiveBackground />
                <Navigation />
                <div className="min-h-screen relative">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<Home />} />
                        <Route path="/projects" element={<Project />} />
                        <Route path="/experience" element={<Experience />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
                <Footer />
                <button className="fixed bottom-6 right-6 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-3xl shadow-lg z-50 transition-transform transform hover:scale-102"
                    onClick={() => popUpAIChat()}
                    >
                    <span className="flex items-center">
                        <FaRobot className="inline-block mr-2 text-2xl" />
                        Ask Sync AI....
                    </span>
                </button>
                <div
                    className="absolute w-6 h-6 border-2 border-purple-400 rounded-full pointer-events-none z-50 transition-all duration-100 ease-out"
                    style={{
                        left: mousePosition.x - 12,
                        top: mousePosition.y - 12,
                        transform: 'translate3d(0, 0, 0)'
                    }}
                >
                    <div className="absolute inset-1 bg-purple-400 rounded-full opacity-20"></div>
                </div>
            </Router>
        </>
    )
}


export default Portfolio
