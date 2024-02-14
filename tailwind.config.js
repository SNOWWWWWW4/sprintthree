/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js",
    "./*.{html,js}",
    "./scripts/**/*.{html,js}"
  ],
  theme: {
    extend: {
      // backgroundImage: { 
      //   'background' : "url('../asssets/milad-fakurian-lxwahh7j5Qw-unsplash.jpg')",
      // }

    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

