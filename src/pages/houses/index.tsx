import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper';
import { motion } from 'framer-motion';
import Image from 'next/future/image';
import { GetStaticProps } from 'next';
import { gql } from '@apollo/client';
import Head from 'next/head';
import Link from 'next/link';

import { Footer } from '../../components/Footer';
import { Menu } from '../../components/Menu';
import { client } from '../../lib/apollo';

type GetHousesResponse = {
  houses: Array<{
    slug: string;
    logo: string;
    name: string;
  }>
}

const GET_HOUSES_QUERY = gql`
  query Houses {
    houses {
      name
      slug
      logo
    }
  }
`

export default function Houses({ houses }: GetHousesResponse) {
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

            <div className='max-w-full 2xl:max-w-screen-2xl 2xl:self-center overflow-x-hidden my-10'>
              <Swiper
                modules={[Pagination, Mousewheel]}
                pagination={{
                  clickable: true,
                }}
                direction={'horizontal'}
                mousewheel={true}
                breakpoints={{
                  499: {
                    slidesPerView: 1,
                    spaceBetween: 5,
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
                    <Link href={`houses/${house.slug}`} >
                      <a>
                        {
                          <motion.div
                            // layoutId={house.slug}
                            initial={{ scale: 1 }}
                            animate={{ scale: 1 }}
                            whileHover={{ scale: 1.02 }}
                            className='h-80 flex items-center justify-center lg:block'
                          >
                            <Image
                              src={house.logo}
                              alt={house.name}
                              width={320}
                              height={320}
                              className='object-bottom m-2 lg:object-center mx-2 rounded-3xl lg:rounded-md cursor-pointer duration-200 self-center'
                            />
                          </motion.div>
                        }
                      </a>
                    </Link>
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

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query<GetHousesResponse>({
    query: GET_HOUSES_QUERY,
  });

  if (!data || !data.houses) {
    return {
      props: {
        houses: [],
      }
    }
  }

  return {
    props: {
      houses: data.houses,
    }
  };
}
