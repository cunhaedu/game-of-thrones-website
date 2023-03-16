import Head from 'next/head';

import { ImageSlider } from '../../components/ImageSlider';
import { Menu } from '../../components/Menu';

import { religions } from '../../mocks/religions.mock';

export default function Religions() {
  return (
    <div>
      <Head>
        <title>Religions | Game of Thrones</title>
      </Head>

      <Menu />

      <main>
        <div className='bg-houses bg-center bg-cover bg-no-repeat min-w-full h-[30vh] md:h-[30vh] lg:h-[60vh]'></div>

        <section className='m-5 mt-10 md:mt-20 md:m-20 2xl:mx-80 2xl:my-40 flex flex-col gap-14'>
          <h1 className='text-2xl md:text-4xl tracking-wide text-white'>
            Religions
          </h1>

          <h2 className='lg:max-w-screen-sm text-primary md:text-lg'>
            &quot;I&apos;ve been all over the world, my boy, and everywhere I go people
            tell me about &quot;the true God&quot;.
            They all think they&apos;ve found the right one!&quot;
            <br />
            <span>-- Salladhor Saan</span>
          </h2>

          <div>
            <p className='text-primary md:text-lg'>
              A multitude of religions are followed by different cultures and
              peoples throughout the known world. These can range from widespread
              belief systems followed by great numbers of people, to more localized
              faiths followed only by a select group.
            </p>

            <br />

            <p className='text-primary md:text-lg'>
              Individual religious devotion in all societies is, of course, on a
              spectrum, from devout adherents to those that just go through some
              of the motions by rote as a cultural norm. Some people are also
              irreligious and privately don&apos;t believe in any gods or religious
              systems.
            </p>
          </div>
        </section>

        <section className='bg-dark/20'>
          <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-center md:text-left text-2xl font-extrabold tracking-tight text-primary">
              Religions in Westeros
            </h2>

            <ImageSlider
              data={religions.map(religion => ({
                ...religion, imageUrl: religion.logo
              }))}
            />
          </div>
        </section>
      </main>
    </div>
  )
}
