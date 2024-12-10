import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            }, 
            colors: {
                whitecream: '#F9F3F0', 
                item: '#333',
                abuabu:'#dfd7d3',
                ijo :'#00615F',
            },
            fontFamily: {
                'brandon': ['BrandonGrotesque', 'sans-serif'], // Menambahkan font khusus
            },
       
        },
    },
    plugins: [],
};


