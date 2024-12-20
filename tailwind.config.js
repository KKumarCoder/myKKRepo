export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4B2C20",    // Deep earthy brown
        secondary: "#8F5E4C",  // Soft muted brown
        accent: "#7AA874",     // Vibrant green
        light: "#FAF8F6",      // Light cream
        dark: "#2E1E1B",       // Darker brown for contrast
      },
      backgroundImage: {
        gradient: "linear-gradient(to bottom, #FAF8F6, #EDE0D4)",
      },
    },
  },
  plugins: [],
};
