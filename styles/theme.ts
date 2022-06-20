import { COLOR } from './color'
import { FONTSIZE } from './fontSize'

const defaultTheme = {
  fontSize: {
    ...FONTSIZE,
  },
  colors: {
    ...COLOR,
  },
}
export type defaultThemeType = typeof defaultTheme

export { defaultTheme }
