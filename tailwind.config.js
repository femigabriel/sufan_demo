/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      md2: "980px",
      lg: "1240px",
      xl: "1640px",
    },
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: '#1B30A4',
        secondary: '#243BBD',
        success: '#3FF7A6',
        "text-blue": "#5669D2",
        "main-bg": '#1B30A4',
        "light-blue": '#99A9FF',

        error: "#D61E34",
        navBg: '#E4E7F5',
        "dark-text": '#080D45',
        blue: '#0C67FF',
        "grey-text": '#4E4E51',
        "grey-20": '#8C8D93',
      },
      borderColor: '#272B30',
      backgroundImage: {
        "FAQ-bg": "url('/images/houses.png'), url('/images/laptops.png')",
        "gradient-header": "linear-gradient(180deg, #DCE0F0 0%, rgba(239, 239, 255, 0.00) 73.96%)"
      },

    },
  },
  plugins: [],
}