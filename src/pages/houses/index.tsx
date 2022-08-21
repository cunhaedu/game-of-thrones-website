import Head from 'next/head';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Footer } from '../../components/Footer';

import { Menu } from '../../components/Menu';
import { houses } from '../../mocks/houses.mock copy';

export default function Houses() {
  return (
    <div>
      <Head>
        <title>Houses | Game of Thrones</title>
      </Head>

      <Menu />

      <main>
        <section className="bg-houses bg-bottom bg-cover bg-no-repeat lg:bg-center">
          <div className='min-w-full h-[50vh] md:h-[60vh] flex flex-col align-middle justify-end lg:justify-center text-white p-10' >
            <h1 className='lg:hidden text-2xl md:text-4xl tracking-wide text-white lg:text-center'>
              Houses
            </h1>
          </div>
        </section>

        <section className='z-10 bg-black py-8 px-4 -mt-5 rounded-t-3xl lg:mt-0 lg:rounded-none'>
          <div className="max-w-2xl mx-auto lg:max-w-7xl">
            <h1 className='hidden lg:block text-4xl tracking-wide text-white mt-4 2xl:text-center'>
              Houses
            </h1>

            <div className='max-w-full 2xl::max-w-screen-2xl 2xl:self-center overflow-x-hidden my-10'>
              <Swiper
                modules={[Pagination]}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  499: {
                    slidesPerView: 1,
                  },
                  500: {
                    slidesPerView: 2,
                    spaceBetween: 5,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                  1536: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                  }
                }}
              >
                {houses.map(house => (
                  <SwiperSlide key={house.slug}>
                    <div
                      style={{backgroundImage: `url('${house.logo}')`}}
                      className={`bg-no-repeat bg-cover bg-bottom md:bg-center mx-2 rounded-3xl lg:rounded-md cursor-pointer duration-200`}>
                      <div className='h-80 w-full flex flex-col'>
                        {/* <span className='mt-64 text-white font-bold pl-5'>{house.title}</span> */}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  )
}
