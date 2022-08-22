import { createTheme } from "@mui/material";

export const themeOptions = {
  palette: {
    type: "light",
    mode: "light",
    primary: {
      main: "#0f1626",
    },
    secondary: {
      main: "#ff533d",
    },
    background: {
      default: "#f5f5f5",
      card: "#f8f9fa",
    },
    error: {
      main: "#fa7c92",
    },
    warning: {
      main: "#fff7c0",
    },
    info: {
      main: "#6ec4db",
    },
    success: {
      main: "#66ab8c",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
    },
  },
  //   components: {
  //     MuiAppBar: {
  //       styleOverrides: {
  //         colorPrimary: {
  //           backgroundColor: "",
  //         },
  //       },
  //     },
  //   },
};

const theme = createTheme(themeOptions);
export default theme;
