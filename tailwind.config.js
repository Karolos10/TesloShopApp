module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Asegúrate de incluir las rutas correctas
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["night"], // Configuración de temas
  },
};
