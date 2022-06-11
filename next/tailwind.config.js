module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Montserrat", "san-serif"],
        header: ["Messapia", "sans-serif"],
      },
      colors: {
        midnight: "#1a202c",
      },
    },
  },
  plugins: [],
};
