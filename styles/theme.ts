import { DefaultTheme } from "styled-components";
import { COLOR } from "./color";
import { FONTSIZE_M } from "./fontSize";

const lightModeTheme: DefaultTheme = {
  MOBILE: {
    fontSize: {
      heading: FONTSIZE_M.HEADING,
      paragraph1: FONTSIZE_M.PARAGRAPH1,
      paragraph2: FONTSIZE_M.PARAGRAPH2,
    },
    colors: {
      font: COLOR.BLACK,
      background: COLOR.WHITE_100,
    },
  }
};

const darkModeTheme: DefaultTheme = {
  MOBILE: {
    fontSize: {
      heading: FONTSIZE_M.HEADING,
      paragraph1: FONTSIZE_M.PARAGRAPH1,
      paragraph2: FONTSIZE_M.PARAGRAPH2,
    },
    colors: {
      font: COLOR.WHITE_100,
      background: COLOR.BLACK,
    }
  },
};

export { 
  lightModeTheme,
  darkModeTheme,
};