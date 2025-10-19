/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            keyframes: {
                shake: {
                    "0%, 100%": { transform: "translateX(0)" },
                    "20%": { transform: "translateX(-4px)" },
                    "40%": { transform: "translateX(4px)" },
                    "60%": { transform: "translateX(-4px)" },
                    "80%": { transform: "translateX(4px)" },
                },
            },
            animation: {
                shake: "shake 0.4s ease-in-out",
            },
        },
    },
    plugins: [],
}
