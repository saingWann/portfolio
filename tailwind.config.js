/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    backgroundImage:{
      'hero': "url('./assets/bgimg2.png')"
    },
    boxShadow:{
      glow: '0 20px 25px -5px rgb(255 255 255 / 0.2), 0 10px 15px -10px rgb(255 255 255 / 0.2)'
    },
    },
    
    fontFamily:{
      'body' : ['Poppins','san-serif'],
      'main': ['"Julius Sans One"', "sans-serif"]
    }
  },
  plugins: [],
}