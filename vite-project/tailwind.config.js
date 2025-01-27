/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      // Вписываем пути к вашим файлам, где используете классы Tailwind
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  