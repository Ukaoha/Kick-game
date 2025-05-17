/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'kick-dark': '#060D1F',
                'kick-secondary': '#171E2F',
                'kick-darker': '#080c19',
                'kick-primary': '#FF1975',
                'kick-purple': '#8F00FF',
                'kick-blue': '#0088FF',
                'kick-teal': '#00C2FF',
                'kick-text-grey': '#8A8A96',
                'kick-section': '#101935',
                'kick-card': '#141A31',
                'kick-rating-bg': 'rgba(14, 17, 28, 0.7)',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            spacing: {
                '18': '4.5rem',
            },
            borderRadius: {
                'xl': '1rem',
            },
            boxShadow: {
                'game-card': '0 4px 20px rgba(0, 0, 0, 0.25)',
            },
            backgroundImage: {
                'gradient-primary': 'linear-gradient(to right, #FF0057, #8F00FF)',
            }
        },
    },
    plugins: [],
}


// hangle error propely on user learners content
//paginated for course content on leaners side 