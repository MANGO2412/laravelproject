import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */


//    content: [
//         './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
//         './storage/framework/views/*.php',
//         './resources/**/*.blade.php',
//         './resources/**/*.js',
//         './resources/**/*.vue',
//     ]
export default {
    content: {
        files: [
            './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
            './storage/framework/views/*.php',
            './resources/**/*.blade.php',
            './resources/**/*.js',
            './resources/**/*.vue',
        ],
        relative: true,
        transform: (content) => content.replace(/taos:/g, ''),
    },
    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            fontSize:{
                '5xl': ['3.105rem', {
                    lineHeight: '3.09rem',
                    letterSpacing: '-0.02em',
                    fontWeight: '900',
                  }],
            }
        },
    },
    plugins: [
        require('taos/plugin')
    ],
    safelist: [
        '!duration-[0ms]',
        '!delay-[0ms]',
        'html.js :where([class*="taos:"]:not(.taos-init))'
    ]
    
};
