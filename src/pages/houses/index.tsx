import Head from 'next/head';

import { Menu } from '../../components/Menu';

export default function Houses() {
  return (
    <div>
      <Head>
        <title>Houses | Game of Thrones</title>
      </Head>

      <Menu />

      <main>
        <div className='bg-houses bg-center bg-cover bg-no-repeat min-w-full h-[30vh] md:h-[30vh] lg:h-[60vh]'></div>

        <section className='m-10 md:m-20 2xl:mx-80 2xl:my-40 flex flex-col gap-14'>
          <h1 className='text-2xl md:text-4xl tracking-wide text-gray-400'>
            Houses
          </h1>

          <div>
            <p className='text-primary text-xl'>
            Westeros is ruled by nine Great Houses, who in turn command hundreds
            of lesser vassal houses. Houses Stark, Arryn, Tully, Greyjoy,
            Lannister, Baratheon, Tyrell, Martell and Targaryen are the nine
            original Great Houses. Each of the Great Houses rules a large region
            and commands significant armies and power in their own right.
            A list of the Great Houses and some of their more significant vassals
            follows:
            </p>
          </div>
        </section>

      </main>
    </div>
  )
}
