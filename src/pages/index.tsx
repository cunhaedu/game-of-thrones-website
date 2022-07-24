import Head from 'next/head';

import { Footer } from '../components/Footer';
import { Menu } from '../components/Menu';

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

      <section className='m-10 md:m-20 2xl:mx-80 2xl:my-40 flex flex-col gap-14'>
        <h1 className='text-2xl md:text-4xl tracking-wide text-gray-400'>
          Welcome
        </h1>

        <h2 className='lg:max-w-screen-sm text-primary text-xl'>
          "When you play the game of thrones, you win or you die."
          <br />
          <span>-- Cersei Lannister</span>
        </h2>

        <div>
          <p className='text-primary text-xl'>
            Game of Thrones is an American fantasy drama television series
            produced by the {' '}
            <a
              href="https://www.hbo.com/"
              target="_blank"
              rel="noopener noreferrer"
              className='underline underline-offset-2 decoration-dotted hover:text-gray-400'
            >
              HBO
            </a>
            {' '}cable network. It is based on the novel series
            A Song of Ice and Fire, written by George R.R. Martin, who serves
            as a producer, creative consultant and scriptwriter on the television
            series. David Benioff and D.B. Weiss created the television series
            and serve as executive producers, showrunners and the main writers.
          </p>

          <br />

          <p className='text-primary text-xl'>
            This website aims to resolve an uncomfortable feeling I got when
            looking for some serie's information on internet and ended up find
            myself in a wiki that contain, literally, an ocean of information.
            The first take is that it's a good thing, but for me, who was
            justing looking for a summary or something like it, that amount of
            information only draw my attention away from my original purpose.
          </p>

          <p className='text-primary text-xl'>
            So, if you love this serie but got the same problem, this website is
            for you, it gather the information I was talking about from some
            wikis on internet, summarize it and, finally, present it in a
            beautiful and organized way.
          </p>

          <p className='text-primary text-xl'>
            All the information in this website is provided from the following
            wikis:
          </p>

          <ul className='mt-5 flex flex-col gap-2'>
            <li>
              <a
                href="https://gameofthrones.fandom.com/wiki/Game_of_Thrones_Wiki"
                target="_blank"
                rel="noopener noreferrer"
                className='underline underline-offset-2 decoration-dotted text-xl text-primary hover:text-gray-400'
              >
                Game of Thrones wiki
              </a>
            </li>

            <li>
              <a
                href="https://wiki.geloefogo.com/"
                target="_blank"
                rel="noopener noreferrer"
                className='underline underline-offset-2 decoration-dotted text-xl text-primary hover:text-gray-400'
              >
                Gelo e Fogo wiki (in Brazil Portuguese)
              </a>
            </li>
          </ul>

        </div>
      </section>

      <Footer />

    </div>
  )
}
