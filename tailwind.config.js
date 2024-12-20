module.exports = {
  darkMode: ["selector", '[data-mode="darkk"]'],
  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
  },

  plugins: [require("daisyui")],
};
