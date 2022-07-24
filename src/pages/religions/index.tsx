import Head from 'next/head';
import Menu from '../../components/Menu';

const religions = [
  {
    id: 1,
    name: 'Old Gods of the Forest',
    href: '#',
    imageSrc: 'https://i.pinimg.com/originals/8c/9e/dc/8c9edcaab206fcb09244aba0f68c7ba1.png',
    imageAlt: "Old Gods of the Forest",
  },
  {
    id: 2,
    name: 'Faith of the Seven',
    href: '#',
    imageSrc: 'https://imgix.bustle.com/uploads/image/2019/4/12/2a6d1b57-6266-4834-9765-027b18d2fa5c-faithofseven.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg',
    imageAlt: "Faith of the Seven",
  },
  {
    id: 3,
    name: 'Drowned God',
    href: '#',
    imageSrc: 'https://i.ytimg.com/vi/kOAZYjTJ1Ms/maxresdefault.jpg',
    imageAlt: "Drowned God",
  },
]

export default function Religions() {
  return (
    <div>
      <Head>
        <title>Religions | Game of Thrones</title>
      </Head>

      <Menu />

      <main>
        <div className='bg-houses bg-center bg-cover bg-no-repeat min-w-full h-[30vh] md:h-[30vh] lg:h-[60vh]'></div>

        <section className='m-10 md:m-20 2xl:mx-80 2xl:my-40 flex flex-col gap-14'>
          <h1 className='text-2xl md:text-4xl tracking-wide text-gray-400'>
            Religions
          </h1>

          <h2 className='lg:max-w-screen-sm text-primary text-xl'>
            "I've been all over the world, my boy, and everywhere I go people
            tell me about "the true God".
            They all think they've found the right one!"
            <br />
            <span>-- Salladhor Saan</span>
          </h2>


          <div>
            <p className='text-primary text-xl'>
              A multitude of religions are followed by different cultures and
              peoples throughout the known world. These can range from widespread
              belief systems followed by great numbers of people, to more localized
              faiths followed only by a select group.
            </p>

            <br />

            <p className='text-primary text-xl'>
              Individual religious devotion in all societies is, of course, on a
              spectrum, from devout adherents to those that just go through some
              of the motions by rote as a cultural norm. Some people are also
              irreligious and privately don't believe in any gods or religious
              systems.
            </p>
          </div>
        </section>

        <section className='bg-dark'>
          <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-center md:text-left text-2xl font-extrabold tracking-tight text-primary">
              Religions in Westeros
            </h2>

            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {religions.map(religion => (
                <div key={religion.id} className="group relative">
                  <div className="w-full min-h-72 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-72 lg:aspect-none">
                    <img
                      src={religion.imageSrc}
                      alt={religion.imageAlt}
                      className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    />
                  </div>

                  <h3 className="text-lg text-center mt-4 text-primary">
                    <a href={religion.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {religion.name}
                    </a>
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
