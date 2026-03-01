import type { Config } from "tailwindcss"

const config: Config = {
    content: ["./src/app/**/*.{ts,tsx}"], // scans pages and components
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-geist-sans)"],
                mono: ["var(--font-geist-mono)"],                
            },
        },
    },
    plugins: []
};

export default config;