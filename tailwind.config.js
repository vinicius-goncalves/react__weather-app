import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.css', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                color0: '#1f293b',
                color1: '#0f172a',
                color2: '#141b27',
                color3: '#62676f',
                color4: '#0d0d0d',
            },
        },
        fontFamily: {
            custom: ['Poppins', ...fontFamily.sans],
        },
    },
    plugins: [import('tailwindcss'), import('autoprefixer'), import('postcss')],
};
