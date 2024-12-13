/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#58CD4D',
        sidehover: '#6DFF6121',
        inputB: '#CED8E1B2',
        black: '#000000',
        grey: '#696A6F',
        pending: '#FF9C644D',
        createText: '#696A6F',
        white: '#FFFFFF',
        logo: '#2AFF17',
        lightgrey: '#D9D9D947',
        lightblack: '#00000078',
        nav: '#6DFF6145',
        bg: '#6DFF4123',
        bg_dash: '#ECF5EA',
        grade: "#BFEDBB",
        btngrade: "#58CD4D",
        border: "D9D9D9"
      }
    },
  },
  plugins: [],
}

