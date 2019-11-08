const breakpoints: any = ['40em', '52em', '64em', '80em'];
// aliases
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

export default {
  colors: {
    black: '#000e1a',
    white: '#fff',
    blue: '#007ce0',
    navy: '#004175',
    primary: 'purple',
    secondary: 'pink'
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  breakpoints
};

interface ColorTypes {
  black: string;
  white: string;
  blue: string;
  navy: string;
  primary: string;
  secondary: string;
}
export interface ThemeProps {
  colors: ColorTypes;
}
