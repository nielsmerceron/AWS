const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
    daisyui: {
      themes: ["cupcake","luxury"],
    },
  },

  plugins: [require("daisyui")],
};

module.exports = config;
