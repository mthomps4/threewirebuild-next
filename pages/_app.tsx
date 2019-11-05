import theme from '@rebass/preset';
import { ThemeProvider } from 'emotion-theming';
import App from 'next/app';
import React from 'react';
// import theme from '../theme';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
