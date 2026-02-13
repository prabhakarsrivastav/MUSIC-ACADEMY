/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                "primary": "#ff5724",
                "background-light": "#FFF5EB", // Updated to match dashboard 2
                "background-dark": "#0F172A", // Updated to match dashboard 2
                "sidebar-dark": "#1E293B",
                "accent-cream": "#FFF5EB",
                "charcoal": "#2B2B2B",
                "secondary": "#9d71fd",
                "brand-peach": "#FFF5EB",
            },
            fontFamily: {
                "display": ["Manrope", "sans-serif"],
                "jakarta": ["Plus Jakarta Sans", "sans-serif"]
            },
            borderRadius: {
                "DEFAULT": "0.5rem",
                "lg": "1rem",
                "xl": "1.5rem",
                "2xl": "2rem", // Updated for Dashboard 2
                "3xl": "2.5rem",
                "full": "9999px"
            },
            boxShadow: {
                "gloss": "0 10px 30px -5px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.02), inset 0 1px 0 0 rgba(255, 255, 255, 0.5)",
                "premium": "0 10px 25px -5px rgba(255, 87, 34, 0.08), 0 8px 10px -6px rgba(255, 87, 34, 0.05)"
            }
        },
    },
    plugins: [],
}
