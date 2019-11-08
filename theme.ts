const breakpoints: any = ['40em', '52em', '64em', '80em'];
// aliases
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

export default <ThemeProps>{
  colors: {
    black: '#000e1a',
    white: '#fff',
    blue: '#007ce0',
    navy: '#004175',
    primary: 'purple',
    secondary: 'pink',
    success: 'green',
    info: 'blue',
    warning: 'orange',
    danger: 'maroon'
  },
  bg: {
    primary: 'white',
    secondary: 'black',
    success: 'lime',
    info: 'cyan',
    warning: 'yellow',
    danger: 'red'
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  breakpoints
};

interface BgColorTypes {
  success: string;
  info: string;
  warning: string;
  danger: string;
  primary: string;
  secondary: string;
}

interface ColorTypes {
  black: string;
  white: string;
  blue: string;
  navy: string;
  success: string;
  info: string;
  warning: string;
  danger: string;
  primary: string;
  secondary: string;
}
export interface ThemeProps {
  colors: ColorTypes;
  bg: BgColorTypes;
}
