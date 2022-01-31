// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";

// 2. Add your color mode config
const customTheme_ = {
  styles: {
    global: {
      body: {
        bg: "#F8F9FA",
        color: "#2D3748",
      },
    },
  },
  colors: {
    white: "#fff",
    whiteOpacityLight: "rgba(255, 255, 255, 0.84)",
    divider_darker: "#E0E1E2",
    divider_bright: "#E2E8F0",
    font_color: "#2D3748",
    gray: "#A0AEC0",
    blue_chillang: "#4FD1C5",
    orange: "#F2994A",
    red: "#EB5757",
    yellow: "#FFDA44",
  },
  fonts: {
    body: "Helvetica, sans-serif",
  },
  font_size: {
    xsmall: "10px",
    small: "12px",
    normal: "16px",
    medium: "18px",
    large: "24px",
  },
  font_weight: {
    light: "400",
    normal: "700",
    bold: "bold",
  },
  paddingAround: {
    normal: "10px",
    large: "25px",
  },
  marginAround: {
    normal: "10px",
    large: "25px",
  },
  margin: {
    small: "5px",
    medium: "8px",
    mediumL: "10px",
    large: "18px",
    xLarge: "25px",
  },
  opacity: {
    light: 0.84,
  },
  border_radius: {
    small: "5px",
    medium: "10px",
    large: "15px",
    hard: "50px",
  },
  border: {
    light: "5px solid white",
  },
};
// 3. extend the theme
const customTheme = extendTheme(customTheme_);

export { customTheme };
