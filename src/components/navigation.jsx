import React, { useState, useEffect } from "react";
import { MdOutlineWorkHistory } from "react-icons/md";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope, FaDownload } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import resumePdf from "../assets/resume_xuanhan.pdf";

function Navigation() {
  const navigate = useNavigate();
  const resumePath = resumePdf;
  const menuNav = {
    "About": "/about",
    "Projects": "/projects",
    "Experience": "/experience",
    "Contact": "/contact"
  }
  const iconMap = {
    "About": <FaUser />,
    "Projects": <FaProjectDiagram />,
    "Experience": <MdOutlineWorkHistory />,
    "Contact": <FaEnvelope />
  };

  const [active, setActive] = useState("About");

  useEffect(() => {
    const currentPath = window.location.pathname;
    const activeItem = Object.keys(menuNav).find(key => menuNav[key] === currentPath);

    if (activeItem) {
      setActive(activeItem);
    }
  }, [window.location.pathname]);

  function handleClick(item) {
    setActive(item);
    navigate(menuNav[item]);
  }

  return (
    <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all rounded-2xl w-5/6 max-w-6xl backdrop-blur-2xl bg-black/40 border border-white/30 shadow-xl shadow-white/20 cursor-pointer`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 group">
            <div className="flex items-center space-x-3 cursor-pointer hover:scale-105" onClick={() => setActive("About")}>
              <div className="relative w-10 h-10 bg-gradient-to-br from-blue-400 via-cyan-400 to-purple-500 rounded-xl flex items-center justify-center transform ">
                <span className="text-white font-bold text-base tracking-wider">XH</span>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-cyan-400 to-purple-500 rounded-xl blur-sm opacity-0 " />
              </div>
              <div className="flex flex-col">
                <span className="text-white text-xl font-bold tracking-tight ">
                  XHSYNC
                </span>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-5">
            {Object.entries(menuNav).map(([item, index]) => (
              <button
                key={item}
                onClick={() => handleClick(item)}
                className={`relative px-6 py-3 text-sm font-semibold transition-all duration-500 ease-out transform group overflow-hidden rounded-xl ${active === item
                  ? "text-white text-base scale-105 bg-gradient-to-r from-blue-500/25 to-purple-500/25 backdrop-blur-sm border border-white/25 shadow-lg shadow-blue-500/25"
                  : "text-gray-300 hover:text-white hover:scale-102 hover:bg-white/8"
                  }`}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className={`absolute inset-0 transition-all duration-500 rounded-xl ${active === item
                  ? "bg-gradient-to-r from-blue-500/15 to-purple-500/15 blur-sm"
                  : "bg-transparent group-hover:bg-white/5"
                  }`} />
                <div className="relative z-10 flex items-center space-x-2">
                  <span className={`transition-all text-lm duration-300 ${active === item ? "text-blue-400 scale-110" : "text-gray-400 group-hover:text-white"
                    }`}>
                    {iconMap[item]}
                  </span>
                  <span className="tracking-wide">
                    {item}
                  </span>
                </div>

                {active === item && (
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-10 h-0.5 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 rounded-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 rounded-full animate-pulse" />
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 rounded-full blur-sm animate-ping opacity-30" />
                  </div>
                )}
                <div className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-white/60 rounded-full transition-all duration-300 ${active === item ? "w-0" : "w-0 group-hover:w-8"
                  }`} />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
                {active === item && (
                  <>
                    <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-blue-400/60 rounded-tl-xl" />
                    <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-purple-400/60 rounded-tr-xl" />
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-blue-400/60 rounded-bl-xl" />
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-purple-400/60 rounded-br-xl" />
                  </>
                )}

                {/* Particle effect for active item */}
                {active === item && (
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-2 right-2 w-1 h-1 bg-blue-400 rounded-full animate-ping" />
                    <div className="absolute bottom-2 left-2 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
                  </div>
                )}
              </button>
            ))}
          </div>
          <div className="flex-shrink-0">
            <button className="relative px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-sm font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl hover:shadow-purple-500/30 group overflow-hidden"
              onClick={() => window.open(resumePath, '_blank', 'noopener,noreferrer')}
              >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10 flex items-center space-x-2">
                <FaDownload className="text-xs group-hover:animate-bounce" />
                <span>My Resume</span>
              </div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </div>

              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur-sm opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;