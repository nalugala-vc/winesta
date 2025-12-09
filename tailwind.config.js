/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#5D4037',
                    light: '#8D6E63',
                },
                secondary: {
                    DEFAULT: '#d4af37',
                    light: '#f3e5ab',
                },
                background: '#fdfbf7',
                text: {
                    DEFAULT: '#2c2c2c',
                    light: '#666666',
                },
                white: '#ffffff',
            },
            fontFamily: {
                heading: ['"Playfair Display"', 'serif'],
                body: ['Lato', 'sans-serif'],
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideDown: {
                    '0%': { opacity: '0', transform: 'translateY(-20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                scaleIn: {
                    '0%': { opacity: '0', transform: 'scale(0.95)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
            animation: {
                'fade-in': 'fadeIn 1.5s ease-out forwards',
                'slide-down': 'slideDown 1s ease-out 0.5s forwards',
                'scale-in': 'scaleIn 1s ease-out 0.8s forwards',
                'fade-in-delay': 'fadeIn 1s ease-out 1.2s forwards',
                'fade-in-up': 'fadeInUp 1s ease-out 1.5s forwards',
            },
        },
    },
    plugins: [],
}
