/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                brand: '#877b73',
            },
            backgroundImage: {
                banner: `url('../public/images/banner.jpg')`,
            },
            spacing: {
                120: '30rem',
            },
        },
    },
    plugins: [],
};
