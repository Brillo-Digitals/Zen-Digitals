/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: {
                    DEFAULT: '#050B18',
                    surface: '#0d1a2d',
                },
                primary: {
                    DEFAULT: '#06B6D4',
                },
                textMain: {
                    DEFAULT: '#ffffff',
                }
            }
        },
    },
    plugins: [],
}
