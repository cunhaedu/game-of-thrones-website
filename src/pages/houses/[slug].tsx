import { RichText } from '@graphcms/rich-text-react-renderer';
import { ElementNode } from '@graphcms/rich-text-types';
import { GetStaticPaths, GetStaticProps } from 'next';
import { motion } from 'framer-motion';
import { gql } from '@apollo/client';
import Image from 'next/image';

import { Params } from '../../interfaces/Params';

import { Menu } from '../../components/Menu';

import { client } from '../../lib/apollo';
import { fadeInUpAnimation } from '../../animations/fadeInUp';

type GetHouseResponse = {
  house: {
    slug: string;
    name: string;
    logo: string;
    words: string;
    phrase: string;
    description: {
      raw: {
        children: ElementNode[];
      }
    };
    phraseAuthor: {
      slug: string;
      name: string;
    }
  }
}

const GET_HOUSE_QUERY = gql`
  query House  ($slug: String) {
    house(where: {slug: $slug}) {
      slug
      logo
      name
      phrase
      words
      description {
        raw
      }
      phraseAuthor {
        name
        slug
      }
    }
  }
`

const GET_HOUSES_QUERY = gql`
  query Houses {
    houses {
      slug
    }
  }
`

export default function House({ house }: GetHouseResponse) {
  return (
    <motion.div
      exit={{opacity: 0}}
      initial="initial"
      animate="animate"
    >
      <Menu />

      <main className='p-5 md:p-10 mt-5 lg:mt-0 lg:p-20 self-center'>
        <section className='flex flex-col py-5 lg:flex-row align-middle justify-center lg:justify-evenly gap-10 lg:gap-0 2xl:max-w-screen-2xl mx-auto'>
          <aside className='flex align-middle justify-center'>
            <motion.div
              className='min-w-[70vw] min-h-[70vw] md:min-w-[400px] md:min-h-[400px]'
              initial={{opacity: 0, y: 200}}
              exit={{opacity: 0}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.6}}
              key={house.logo}
            >
              <Image
                key={house.logo}
                src={house.logo}
                height={400}
                width={400}
                alt={house.name}
                className="object-bottom object-cover md:object-center rounded-3xl"
              />
            </motion.div>
          </aside>

          <article className='flex flex-col text-white self-center'>
            <div className='lg:max-w-[90%] self-center flex flex-col align-middle justify-center gap-10'>
              <div className='flex flex-col align-middle justify-center'>
                <motion.h1
                  variants={fadeInUpAnimation}
                  className='text-2xl md:text-5xl tracking-wide text-center'
                >
                  {house.name}
                </motion.h1>
                {house.words && (
                  <motion.span
                    variants={fadeInUpAnimation}
                    className='text-center text-primary block'
                  >
                    {house.words}
                  </motion.span>
                )}
              </div>

              <motion.div variants={fadeInUpAnimation} className='lg:w-3/4 self-center'>
                <p className='text-center text-primary'>{house.phrase}</p>
                <p className='text-center font-semibold text-primary'>
                  --{house.phraseAuthor.name}
                </p>
              </motion.div>
            </div>
          </article>
        </section>

        <motion.section variants={fadeInUpAnimation} className='my-10 text-primary 2xl:max-w-screen-2xl mx-auto text-justify hyphens-auto'>
          {house.description
            ? <RichText content={house.description.raw} />
            : <p>No description yet...</p>
          }
        </motion.section>
      </main>

    </motion.div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query<{ houses: Array<{ slug: string }> }>({
    query: GET_HOUSES_QUERY,
  });

  return {
    paths: data && data.houses && data.houses.length
      ? data.houses.map(house => ({ params: { slug: house.slug } }))
      : [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as Params;

  const { data } = await client.query<GetHouseResponse>({
    query: GET_HOUSE_QUERY,
    variables: { slug }
  });

  if (!data || !data.house) {
    return {
      redirect: {
        permanent: false,
        destination: "/houses"
      }
    }
  }

  return {
    props: {
      house: data.house,
    },
    revalidate: 60 * 60 * 8,
  };
}
