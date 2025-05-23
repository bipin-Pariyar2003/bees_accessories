// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "'Quicksand', sans-serif",
    h1: {
      fontFamily: "'Pacifico', cursive",
    },
    h2: {
      fontFamily: "'Fredoka', sans-serif",
    },
    button: {
      fontFamily: "'Fredoka', sans-serif",
      textTransform: "none",
    },
  },
  palette: {
    primary: {
      main: "#fbbf24", // honey yellow
    },
    secondary: {
      main: "#f472b6", // soft pink
    },
  },
});

export default theme;
