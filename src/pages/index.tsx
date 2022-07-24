import Head from 'next/head';
import Footer from '../components/Footer';
import Menu from '../components/Menu';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Início | Game Of Thrones</title>
      </Head>

      <Menu />

      <header className="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
        <div
          className="relative z-20 p-5"
        >
          <img src="/assets/images/logo.svg" alt="Logo" className='w-96' />

          <span className='text-xl text-primary font-semibold block text-center pt-2'>
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

      <section>
        <h3 className='font-[GotFont] text-center my-10 text-transparent text-5xl text-stroke-gray tracking-wide'>
          Winter is Coming
        </h3>
      </section>

      <Footer />

    </div>
  )
}
