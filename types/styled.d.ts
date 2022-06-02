import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    MOBILE: {
      fontSize: {
        heading: string;
        paragraph1: string;
        paragraph2: string;
      },      
      colors: {
        font: string;
        background: string;
      };
    }
  }
}