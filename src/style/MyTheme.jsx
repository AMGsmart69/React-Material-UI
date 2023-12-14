const { grey } = require("@mui/material/colors");

const getDesignTokens = (mode) => ({
  palette: {
    // @ts-ignore
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          AMGColor: {
            main: grey[300],
          },
        }
      : {
          // palette values for dark mode
          AMGColor: {
            main: grey[800],
          },
        }),
  },
});

export default getDesignTokens;
