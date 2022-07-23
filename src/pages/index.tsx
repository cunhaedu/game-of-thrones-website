import Head from 'next/head';
import Footer from './components/Footer';
import Menu from './components/Menu';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Início | Game Of Thrones</title>
      </Head>

      <Menu />

      <header className="relative flex items-center justify-center w-full h-screen mb-12 overflow-hidden">
        <div
          className="relative z-20 p-5"
        >
          {/* <h1 className='text-5xl text-gray-300 text-center tracking-widest leading-tight'>
            Game of Thrones
          </h1> */}

          <img src="/assets/images/logo.svg" alt="Logo" className='w-96' />

          <span className='text-xl text-white block text-center w-full pt-2'>
            Welcome to the game
          </span>
        </div>

        <video
          autoPlay
          loop
          muted
          className="absolute z-10 min-w-full min-h-full max-w-none"
        >
          <source
            src="/assets/videos/introduction.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </header>

      <section className='h-10'>
        <h3></h3>
      </section>

      <Footer />

    </div>
  )
}
