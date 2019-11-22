import { defaultTheme, ThemeProvider } from '@3wirebuild/styled-system';
import App from 'next/app';
import React from 'react';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={defaultTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
