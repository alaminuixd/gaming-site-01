export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        circular: ["Circular", "sans-serif"],
        general: ["General", "sans-serif"],
        robert: ["Robert", "sans-serif"],
        zentry: ["Zentry", "sans-serif"],
        styleScript: ["StyleScript", "sans-serif"],
      },
      /*       colors: {
        kblue: {
          50: "#DFDFF0",
          75: "#DFDFF2",
          100: "#F0F2FA",
          200: "#4FB7DD",
        },
        kviolet: {
          300: "#5724FF",
        },
        yellow: {
          100: "#8E983F",
          300: "#EDFF66",
        },
      }, */
    },
  },
  plugins: [],
};
