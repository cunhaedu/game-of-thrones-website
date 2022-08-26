import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import { client } from '../lib/apollo';

import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <AnimateSharedLayout>
        <AnimatePresence mode='wait'>
          <Component {...pageProps} />
        </AnimatePresence>
      </AnimateSharedLayout>
    </ApolloProvider>
  )
}

export default MyApp
