import { createTheme } from "@mui/material";

export const themeOptions = {
  palette: {
    type: "dark",
    mode: "dark",
    primary: {
      main: "#FFBD69",
    },
    secondary: {
      main: "#D1e8e2",
    },
    avatar: {
      main: "#D1e8e2",
    },
    background: {
      default: "#adb5bd",
      paper: "#116466",
    },
    error: {
      main: "#ffcb9a",
    },
    warning: {
      main: "#FFBD69",
    },
    info: {
      main: "#6ec4db",
    },
    success: {
      main: "#66ab8c",
    },
    text: {
      primary: "#fff",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#2C3531",
        },
      },
    },
  },
};

const theme = createTheme(themeOptions);
export default theme;
