import React from 'react';
import { useColorMode } from 'theme-ui';
export default (_props: any) => {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <header>
      <h1>Color mode: {colorMode}</h1>
      <button
        onClick={_e => {
          setColorMode(colorMode === 'light' ? 'dark' : 'light');
        }}
      >
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </button>
    </header>
  );
};
