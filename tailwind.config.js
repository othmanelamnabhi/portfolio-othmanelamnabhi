const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "custom-dark-coal-sprouse": "#16161a",
      "custom-dark-off-by-one": "#fffffe",
      "custom-dark-gull-gray": "#94a1b2",
      "custom-dark-3-days-ecchymose": "#7f5af0",
      "custom-dark-motorcycle-black": "#242629",
      "custom-light-dodger-blue": "#3DA9FC",
      "custom-light-tarawera": "#094067",
      "custom-light-shuttle-gray": "#5F6C7B",
      "custom-light-pattens-blue": "#D8EEFE",
    },
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
