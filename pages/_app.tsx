import App from 'next/app';
import React from 'react';
import { ColorMode, ThemeProvider } from 'theme-ui';
import ThemeHeader from '../components/ThemeHeader';
import { base } from '../theme';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={base}>
        <ColorMode />
        <ThemeHeader />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
