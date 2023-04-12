const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
    daisyui: {
      themes: ["luxury", "light", "dracula"],
    },
  },

  plugins: [require("daisyui")],
};

module.exports = config;
