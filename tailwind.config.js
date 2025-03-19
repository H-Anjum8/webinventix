/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
   "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {
        colors: {
          primary: '#6bc56c',       // Add primary color
          // secondary: '#4a90e2',     // Add secondary color
          // background: '#f4f4f4',    // Add background color
          // text: '#333',             // Add text color
        },
      },
    },
    plugins: [],
  };