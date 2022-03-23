import { DefaultTheme } from "styled-components";

export const darkTheme: DefaultTheme = {
  bgColor: "#2f3640",
  textColor: "#f5f6fa",
  cardBgColor: "transparent",
};

export const lightTheme: DefaultTheme = {
  bgColor: "#f5d2f0",
  textColor: "#2f3640",
  cardBgColor: "#f5f6fa",
};

const deviceSizes = {
  mobile: "375px",
  tablet: "768px",
  laptop: "1024px",
};

export const device = {
  mobile: `screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `screen and (max-width: ${deviceSizes.tablet})`,
  laptop: `screen and (max-width: ${deviceSizes.laptop})`,
};
