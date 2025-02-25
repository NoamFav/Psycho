// tailwind.config.js
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6A5ACD", // Soft purple
        secondary: "#FF69B4", // Pink
        accent: "#FFA500", // Orange
        light: "#F8F9FA",
        dark: "#343A40",
      },
      fontFamily: {
        comic: ['"Comic Sans MS"', "cursive"],
        rounded: ['"Varela Round"', "sans-serif"],
      },
      animation: {
        "bounce-slow": "bounce 3s infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
