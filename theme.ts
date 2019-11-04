const breakpoints: any = ['40em', '52em', '64em', '80em'];
// aliases
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const colors = {
  text: '#000',
  background: '#fff',
  primary: '#07c',
  boxBg: 'cyan',
  boxColor: 'black',
  modes: {
    dark: {
      text: '#fff',
      background: '#000',
      primary: '#0cf',
      boxBg: 'green',
      boxColor: 'white'
    }
  }
};

// example base theme from @theme-ui/presets
const heading = {
  fontFamily: 'heading',
  lineHeight: 'heading',
  fontWeight: 'heading'
};

const styles = {
  root: {
    fontFamily: 'body',
    lineHeight: 'body',
    fontWeight: 'body'
  },
  h1: {
    ...heading,
    fontSize: 5
  },
  h2: {
    ...heading,
    fontSize: 4
  },
  h3: {
    ...heading,
    fontSize: 3
  },
  h4: {
    ...heading,
    fontSize: 2
  },
  h5: {
    ...heading,
    fontSize: 1
  },
  h6: {
    ...heading,
    fontSize: 0
  },
  pre: {
    fontFamily: 'monospace',
    overflowX: 'auto',
    code: {
      color: 'inherit'
    }
  },
  code: {
    fontFamily: 'monospace',
    fontSize: 'inherit'
  },
  table: {
    width: '100%',
    borderCollapse: 'separate',
    borderSpacing: 0
  },
  th: {
    textAlign: 'left',
    borderBottomStyle: 'solid'
  },
  td: {
    textAlign: 'left',
    borderBottomStyle: 'solid'
  }
};

export const base = {
  initialColorModeName: 'light',
  colors,
  breakpoints,
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace'
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  styles
};
