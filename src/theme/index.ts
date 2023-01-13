import { extendTheme, theme as defaultTheme } from "@chakra-ui/react";

const fonts = {
  heading:
    "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
  body: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
};

export const colors = {
  ...defaultTheme.colors,
  blue: {
    500: "#5686f5",
    400: "#1c2433",
  },
  "button-color": "#222730",
  "border-color": "#2b303b",
  "main-bg": "#16181d",
  "main-color": "#bbc3d3"
};

const theme = extendTheme({
  ...defaultTheme,
  colors,
  fonts,
});

export default theme;
