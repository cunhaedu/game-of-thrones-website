import Head from 'next/head';
import Menu from '../../components/Menu';

export default function Houses() {
  return (
    <div>
      <Head>
        <title>Houses | Game of Thrones</title>
      </Head>

      <Menu />

      <main>
        <div className='bg-houses bg-center bg-cover bg-no-repeat min-w-full h-[30vh] md:h-[30vh] lg:h-[60vh]'></div>

        <section className='m-10'>
          <h1 className='text-2xl md:text-4xl tracking-wide text-gray-200'>
            Houses
          </h1>
        </section>

      </main>
    </div>
  )
}
