import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { client } from '../lib/apollo';
import { AnimateSharedLayout } from "framer-motion";

import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <AnimateSharedLayout>
        <Component {...pageProps} />
      </AnimateSharedLayout>
    </ApolloProvider>
  )
}

export default MyApp
