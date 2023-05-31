import { MantineProvider } from '@mantine/core';
import { AppProps } from 'next/app';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
