import { GetStaticPaths, GetStaticProps } from 'next';
import { motion } from 'framer-motion';
import { gql } from '@apollo/client';

import { Params } from '../../interfaces/Params';
import { Menu } from '../../components/Menu';
import { client } from '../../lib/apollo';
import Image from 'next/future/image';

type GetHouseResponse = {
  house: {
    slug: string;
    name: string;
    logo: string;
    words: string;
    phrase: string;
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
    <div>
      <Menu />

      <main className='p-5 md:p-10 mt-5 lg:mt-0 lg:p-20 self-center'>
        <section className='flex flex-col py-5 lg:flex-row align-middle justify-center lg:justify-evenly gap-10 lg:gap-0 2xl:max-w-screen-2xl mx-auto'>
          <aside className='flex align-middle justify-center'>
            <motion.div
              // layoutId={house.slug}
              // style={{backgroundImage: `url('${house.logo}')`}}
              className='min-w-[70vw] min-h-[70vw] md:min-w-[400px] md:min-h-[400px]'
            >
              <Image src={house.logo} width={400} height={400} alt={house.name} className="object-bottom object-cover md:object-center rounded-3xl" />
            </motion.div>
          </aside>

          <article className='flex flex-col text-white self-center'>
            <div className='lg:max-w-[90%] self-center flex flex-col align-middle justify-center gap-10'>
              <div className='flex flex-col align-middle justify-center'>
                <h1 className='text-2xl md:text-5xl tracking-wide text-center'>
                  {house.name}
                </h1>
                {house.words && (
                  <span className='text-center text-primary block'>
                    {house.words}
                  </span>
                )}
              </div>

              <div className='lg:w-3/4 self-center'>
                <p className='text-center text-primary'>{house.phrase}</p>
                <p className='text-center font-semibold text-primary'>
                  --{house.phraseAuthor.name}
                </p>
              </div>
            </div>
          </article>
        </section>

        <section className='my-10 text-primary 2xl:max-w-screen-2xl mx-auto text-justify hyphens-auto'>
          <p>
            House Targaryen of Dragonstone is an exiled Great House of Westeros
            and the former royal House of the Seven Kingdoms. House Targaryen
            conquered and unified the realm before it was deposed during
            Robert&apos;s Rebellion and House Baratheon replaced it as the new royal
            House. The two surviving Targaryens, Viserys and Daenerys, fled into
            exile to the Free Cities of Essos across the Narrow Sea. House
            Lannister replaced House Baratheon as the royal House following the
            destruction of the Great Sept of Baelor, but the realm was
            reconquered by Daenerys Targaryen, retaking the Iron Throne
            following the Battle of King&apos;s Landing. After she laid waste to a
            surrendered King&apos;s Landing, Daenerys was assassinated by Jon Snow to
            prevent further destruction. Jon became the last known living member
            of House Targaryen and his identity as the son of Rhaegar Targaryen
            is kept hidden from Westeros. He is exiled to the Night&apos;s Watch for
            the assassination of Daenerys. The bloodline of House Targaryen also
            still exists in various houses, such as House Baratheon, House
            Velaryon, and House Martell.
          </p>

          <br />

          <p>
            House Targaryen&apos;s sigil is a three-headed red dragon on a black
            background, and their house words are &quot;Fire and Blood&quot;.
          </p>
        </section>
      </main>


    </div>
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
