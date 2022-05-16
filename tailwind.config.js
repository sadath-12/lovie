module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coolBlack: "#363638",
        textColor: "#5C5C5C",
        borderColor: "#D9E1E5",
        lightGray: "#F8FAFC",
        lightBlue: "#31B5F7",
        coolOrange: "#E86B33",
        coolDarkGreen: "#5B8B76",
        coolDarkerGreen: "#337357",
      },
      fontFamily: {
        sans: ["Inter"],
        cool: ["Bodoni Moda"],
      },
    },
  },
  plugins: [],
};
