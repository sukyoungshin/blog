import 'styled-components';
import { defaultThemeType } from '@styles/theme';
declare module 'styled-components' {
  export interface DefaultTheme extends defaultThemeType {}
}
