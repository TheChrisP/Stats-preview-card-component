module.exports = {
  purge: ["./index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        BlueDark: "hsl(233, 47%, 7%)",
        BLueDesaturated: "hsl(244, 38%, 16%)",
        VioletSoft: "hsl(277, 64%, 61%)",
        White: "hsl(0, 0%, 100%)",
        WhiteParagraph: "hsla(0, 0%, 100%, 0.75)",
        WhiteHeadings: "hsla(0, 0%, 100%, 0.6)",
      },
      fontFamily: {
        inter: ["Inter"],
        lexendDeca: ["Lexend Deca"],
      },
      fontSize: {
        sl: "15px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
