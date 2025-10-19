import React, { useState, useEffect, useRef } from 'react'

const InteractiveBackground = () => {
    const [ripples, setRipples] = useState([])
    const [particles, setParticles] = useState([])
    const containerRef = useRef(null)
    const particlesRef = useRef([]) // Use ref to avoid dependency issues
    const animationRef = useRef(null)

    // Generate initial particles
    useEffect(() => {
        const initialParticles = Array.from({ length: 30 }, (_, i) => ({
            id: i,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            size: Math.random() * 4 + 2,
            speedX: (Math.random() - 0.5) * 1, // Reduced speed for smoother movement
            speedY: (Math.random() - 0.5) * 1,
            opacity: Math.random() * 0.5 + 0.1
        }))

        setParticles(initialParticles)
        particlesRef.current = initialParticles
    }, [])

    // Smooth animation loop using requestAnimationFrame
    useEffect(() => {
        const animate = () => {
            particlesRef.current = particlesRef.current.map(particle => {
                let newX = particle.x + particle.speedX
                let newY = particle.y + particle.speedY

                // Bounce off edges
                if (newX < 0 || newX > window.innerWidth) {
                    particle.speedX *= -1
                    newX = Math.max(0, Math.min(window.innerWidth, newX))
                }
                if (newY < 0 || newY > window.innerHeight) {
                    particle.speedY *= -1
                    newY = Math.max(0, Math.min(window.innerHeight, newY))
                }

                return {
                    ...particle,
                    x: newX,
                    y: newY
                }
            })

            setParticles([...particlesRef.current])
            animationRef.current = requestAnimationFrame(animate)
        }

        animationRef.current = requestAnimationFrame(animate)

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current)
            }
        }
    }, [])

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 -z-10 overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>

            {particles.map(particle => (
                <div
                    key={particle.id}
                    className="absolute rounded-full bg-white pointer-events-none"
                    style={{
                        left: particle.x,
                        top: particle.y,
                        width: particle.size,
                        height: particle.size,
                        opacity: particle.opacity,
                        transform: 'translate3d(-50%, -50%, 0)',
                        willChange: 'transform',
                    }}
                ></div>
            ))}
        </div>
    )
}

export default InteractiveBackground