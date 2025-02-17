import { StyleSheet } from "react-native-unistyles";

const slate = {
  slate1: "hsl(240, 20%, 99%)",
  slate2: "hsl(240, 20%, 98%)",
  slate3: "hsl(240, 11%, 95%)",
  slate4: "hsl(240, 10%, 92%)",
  slate5: "hsl(230, 11%, 89%)",
  slate6: "hsl(240, 10%, 86%)",
  slate7: "hsl(233, 10%, 82%)",
  slate8: "hsl(231, 10%, 75%)",
  slate9: "hsl(231, 6%, 57%)",
  slate10: "hsl(226, 5%, 53%)",
  slate11: "hsl(220, 6%, 40%)",
  slate12: "hsl(210, 13%, 13%)",
};
const slateDark = {
  slate1: "#111113",
  slate2: "#18191b",
  slate3: "#212225",
  slate4: "#272a2d",
  slate5: "#2e3135",
  slate6: "#363a3f",
  slate7: "#43484e",
  slate8: "#5a6169",
  slate9: "#696e77",
  slate10: "#777b84",
  slate11: "#b0b4ba",
  slate12: "#edeef0",
};

const lightTheme = {
  colors: {
    primary: slate.slate1,
    secondary: slate.slate12,
  },
  gap: (v: number) => v * 8,
};

const darkTheme = {
  colors: {
    primary: slateDark.slate1,
    secondary: slateDark.slate12,
  },
  gap: (v: number) => v * 8,
};

const appThemes = {
  light: lightTheme,
  dark: darkTheme,
};

const breakpoints = {
  xs: 0,
  sm: 300,
  md: 500,
  lg: 800,
  xl: 1200,
};

type AppBreakpoints = typeof breakpoints;
type AppThemes = typeof appThemes;

declare module "react-native-unistyles" {
  export interface UnistylesThemes extends AppThemes {}
  export interface UnistylesBreakpoints extends AppBreakpoints {}
}

StyleSheet.configure({
  settings: {
    initialTheme: "light",
  },
  breakpoints,
  themes: appThemes,
});
