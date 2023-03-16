import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { ApolloProvider } from '@apollo/client';
import { Cinzel } from '@next/font/google';
import type { AppProps } from 'next/app';

import { client } from '../lib/apollo';

import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";

import '../styles/globals.css';

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  weight: ['400', '500', '600', '700']
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <AnimateSharedLayout>
        <AnimatePresence mode='wait'>
          <main className={`${cinzel.variable} font-sans`}>
            <Component {...pageProps} />
          </main>
        </AnimatePresence>
      </AnimateSharedLayout>
    </ApolloProvider>
  )
}
