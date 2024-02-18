/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    {
      relative: true,
      transform: (content) => content.replace(/taos:/g, ''),
      files: ['./src/*.{html,js}'],
    },
    './public/**/*.{html,js}',
    './src/**/*.{html,js}',
  ],

  daisyui: {
    themes: [
      {
        lighttheme: {
          "primary": "#56B280",
          "secondary": "#A8A8A8",
          "accent": "#000",
          "neutral": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#F7F8FA",
          "base-300": "#F2F2F2",
          "info": "#A8A8A8",
          "success": "#ffffff",
          "warning": "#ffffff",
          "error": "#f03258",
        },
      },
      "dark",
    ],

    safelist: [
      '!duration-[0ms]',
      '!delay-[0ms]',
      'html.js :where([class*="taos:"]:not(.taos-init))',
    ],
  },

  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('../img/hero-mobile.jpg')",
      },
    },
  },

  plugins: [
    require("daisyui"),
    require('taos/plugin'),
  ],
};
