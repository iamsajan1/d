  import '../styles/globals.css';
  import type { AppProps } from 'next/app';
  import { ChainId ,ThirdwebProvider } from "@thirdweb-dev/react";

  function MyApp({ Component, pageProps }: AppProps) {
    return (
      <ThirdwebProvider activeChain="ethereum">
        <Component {...pageProps} />
      </ThirdwebProvider>
    );
  }

  export default MyApp;
