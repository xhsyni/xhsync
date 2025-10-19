import React, { useState } from "react";
import { CONTACTS } from "../assets/contact.jsx";

export default function Contact() {
  const [copied, setCopied] = useState("");

  async function handleOpen(href, id, value) {
    window.open(href, "_blank", "noopener,noreferrer");
  }

  async function handleCopy(value, id) {
    await navigator.clipboard.writeText(value);
    setCopied(id);
  }

  return (
        <div className="min-h-screen flex flex-col items-center justify-center text-white relative overflow-hidden pt-[40px]">
            <section className="relative p-10 rounded-xl shadow-md max-w-6xl w-full mx-4 backdrop-blur-2xl bg-black/40 border border-white/30">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl opacity-20"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-3xl opacity-20"></div>
                
                <div className="relative">
                    <h1 className="mb-6 border-blue-400 pl-4 text-3xl font-bold text-transparent bg-clip-text bg-white border-l-4">
                        Contact Me
                    </h1>
                    <p className="text-gray-300 mb-8 text-l">
                        Let's connect! Choose your preferred way to reach out — I'm always happy to chat.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {CONTACTS.map((c, idx) => (
                        <div
                            key={c.id}
                            className="group relative flex items-center justify-between p-5 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1"
                            style={{ animationDelay: `${idx * 100}ms` }}
                        >
                            <div className="flex items-center space-x-4 flex-1 min-w-0 ml-2">
                                <div className="text-purple-400 group-hover:text-pink-400 transition-colors duration-300 flex-shrink-0">
                                    {c.icon}
                                </div>
                                <div className="min-w-0 flex-1">
                                    <div className="text-base font-semibold text-white mb-1">{c.label}</div>
                                    <div className="text-sm text-gray-300 break-all">{c.value}</div>
                                    <div className="text-xs text-gray-400 mt-1">{c.desc}</div>
                                </div>
                            </div>

                            <div className="flex flex-col items-end space-y-2 ml-3 flex-shrink-0">
                                <button
                                    onClick={() => handleOpen(c.href, c.id, c.value)}
                                    className="px-4 py-2 text-sm bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-medium shadow-lg hover:shadow-purple-500/50 hover:scale-105"
                                    aria-label={`Open ${c.label}`}
                                >
                                    Open
                                </button>

                                <button
                                    onClick={() => handleCopy(c.value, c.id)}
                                    className="px-4 py-2 text-sm border border-white/30 rounded-lg text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300 font-medium hover:scale-105"
                                    aria-label={`Copy ${c.label}`}
                                >
                                    {copied === c.id ? "✓ Copied" : "Copy"}
                                </button>
                            </div>
                        </div>
                        ))}
                    </div>

                    <div className="mt-8 flex flex-wrap items-center gap-4">
                        <a className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl text-base hover:bg-white/20 hover:border-white/50 transition-all duration-300 font-medium hover:scale-105 hover:shadow-lg"
                            href={CONTACTS.find(c => c.id === "email")?.href}
                        >
                            Email Me directly
                        </a>
                        <a className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl text-base hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 font-medium shadow-lg hover:shadow-blue-500/50 hover:scale-105"
                            href={CONTACTS.find(c => c.id === "linkedin")?.href}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View My LinkedIn
                        </a>
                    </div>
                </div>
            </section>
        </div>
  );
}