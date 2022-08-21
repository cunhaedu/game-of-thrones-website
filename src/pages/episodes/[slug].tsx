import { gql } from '@apollo/client';
import { GetStaticPaths, GetStaticProps } from 'next';
import { client } from '../../lib/apollo';
import { ParsedUrlQuery } from 'querystring';
import Head from 'next/head';
import { Menu } from '../../components/Menu';
import { AnimatePresence, motion } from 'framer-motion';
import { CaretCircleDown, CaretDoubleDown, CaretDown } from 'phosphor-react';

type Params = ParsedUrlQuery & {
  slug: string;
}

type EpisodeProps = {
  title: string;
  slug: string;
  number: number;
  cover: string;
  season: {
    seasonNumber: number;
  }
}

type GetEpisodeResponse = {
  episode: EpisodeProps;
}

const GET_EPISODES_QUERY = gql`
  query Episodes {
    episodes {
      slug
    }
  }
`

const GET_EPISODE_QUERY = gql`
  query Episode ($slug: String)  {
    episode(where: {slug: $slug}) {
      slug
      title,
      number,
      description,
      cover,
      season {
        seasonNumber
      }
    }
  }
`

export default function Episode({ episode }: GetEpisodeResponse) {
  return (
    <div>
      <Head>
        <title>Início | Game Of Thrones</title>
      </Head>

      <Menu />

      <main>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            layoutId={episode.slug}
            initial={{ y: 0, x: 0, opacity: 0 }}
            animate={{ y: 0, x: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url('${episode.cover}')`}}
            className="bg-ministries bg-center bg-cover bg-no-repeat md:bg-fixed"
          >
            <div className='min-h-screen flex flex-col align-middle justify-between' >
              <div className='min-h-[90vh]  flex flex-col align-middle justify-center text-center text-white'>
                <span className='font-semibold text-sm text-gray-300'>
                  SEASON {String(episode.season.seasonNumber).padStart(2, '0')} / EPISODE {String(episode.number).padStart(2, '0')}
                </span>
                <h1 className='font-bold text-3xl my-3 leading-relaxed tracking-widest md:text-5xl md:leading-relaxed md:tracking-widest'>
                  {episode.title}
                </h1>

                <hr className='w-16 self-center border-gray-300 mb-4' />

                <span className='font-semibold text-sm text-gray-300'>
                  FULL SYNOPSIS
                </span>
              </div>

              <div className='min-h-[10vh] flex flex-col align-middle justify-center'>
                <CaretCircleDown className='text-gray-300/30 self-center' size={32} />
                <p className='text-center text-gray-300/30 text-xs mt-2'>
                  Scroll down
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query<{ episodes: Array<{ slug: string }> }>({
    query: GET_EPISODES_QUERY,
  });

  return {
    paths: data?.episodes && data.episodes.length
      ? data.episodes.map(episode => ({ params: { slug: episode.slug } }))
      : [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx.params as Params;

  const { data } = await client.query<GetEpisodeResponse>({
    query: GET_EPISODE_QUERY,
    variables: { slug }
  });

  if (!data || !data.episode) {
    return {
      redirect: {
        permanent: false,
        destination: "/episodes"
      }
    }
  }

  return {
    props: {
      episode: data.episode,
    }
  };
}
