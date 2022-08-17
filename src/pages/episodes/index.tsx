import Link from 'next/link';
import { gql } from '@apollo/client';
import { GetStaticProps } from 'next';
import { CaretDoubleLeft, CaretDoubleRight } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { Menu } from '../../components/Menu';
import { romanize } from '../../helpers/romanize.helper';
import { client } from '../../lib/apollo';

import { Transition } from 'react-transition-group';

const duration = 1000
const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0
}

const transitionStyles: any = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 }
}

type Episode = {
  title: string;
  slug: string;
  number: number;
  cover: string;
}

type Season = {
  title: string;
  slug: string;
  seasonNumber: number;
  episodes: Episode[];
}

type GetSeasonsWithEpisodesResponse = {
  seasons: Season[]
}

const GET_SEASONS_WITH_EPISODES_QUERY = gql`
  query Seasons {
    seasons(orderBy: seasonNumber_ASC) {
      slug
      title
      seasonNumber
      episodes(orderBy: number_ASC) {
        title
        slug
        number
        cover
      }
    }
  }
`

export default function Episodes({ seasons }: GetSeasonsWithEpisodesResponse) {
  const [selectedSeason, setSelectedSeason] = useState<Season>({} as Season);
  const [selectedEpisode, setSelectedEpisode] = useState<Episode>({} as Episode);
  const [hasPreviousSeason, setHasPreviousSeason] = useState(false);
  const [hasNextSeason, setHasNextSeason] = useState(true);

  const [currentUrl, setCurrentUrl] = useState<string>('');

  useEffect(() => {
    setSelectedSeason(seasons[0]);
    setSelectedEpisode(seasons[0].episodes[0]);

    setCurrentUrl(seasons[0].episodes[0].cover);

    changeNextAndPreviousSeasonInformation(0);
  }, []);

  function handlePreviousSeason(): void {
    const selectedSeasonIndex = seasons.indexOf(selectedSeason) - 1;
    setSelectedSeason(seasons[selectedSeasonIndex]);
    setSelectedEpisode(seasons[selectedSeasonIndex].episodes[0]);

    setCurrentUrl(seasons[selectedSeasonIndex].episodes[0].cover);

    changeNextAndPreviousSeasonInformation(seasons.indexOf(seasons[selectedSeasonIndex]));
  }

  function handleNextSeason(): void  {
    const selectedSeasonIndex = seasons.indexOf(selectedSeason) + 1;
    setSelectedSeason(seasons[selectedSeasonIndex]);
    setSelectedEpisode(seasons[selectedSeasonIndex].episodes[0]);

    setCurrentUrl(seasons[selectedSeasonIndex].episodes[0].cover);

    changeNextAndPreviousSeasonInformation(seasons.indexOf(seasons[selectedSeasonIndex]));
  }

  function changeNextAndPreviousSeasonInformation(currentIndex: number): void {
    const seasonTotalLength = seasons.length - 1;
    setHasNextSeason(currentIndex < seasonTotalLength);
    setHasPreviousSeason(currentIndex > 0);
  }

  return (
    <div>
      <Menu />

      <main className='min-h-screen'>
        <div className='min-h-screen'>

        <Transition
          in={selectedEpisode.cover === currentUrl}
          onExited={() => {
            setCurrentUrl(selectedEpisode.cover)
          }}
          timeout={duration}
        >
          {(state) => (
        <div
          style={{  ...defaultStyle, ...transitionStyles[state], backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url('${selectedEpisode.cover}')` }}
          className="bg-center bg-cover bg-no-repeat z-0 absolute min-w-full min-h-full"
        ></div>
          )}</Transition>

          <div className='z-10 min-h-screen flex flex-col align-middle justify-center text-center text-white relative' >
            <section>
              <p className='text-sm mb-2'>Select Season</p>
              <div className='flex align-middle justify-center gap-5'>
                <button
                  disabled={!hasPreviousSeason}
                  onClick={handlePreviousSeason}
                  className='self-center cursor-pointer disabled:cursor-default disabled:opacity-60'
                >
                  <CaretDoubleLeft size={32} />
                </button>

                <p className='font-bold text-4xl min-w-[50px]'>
                  {romanize(selectedSeason.seasonNumber)}
                </p>

                <button
                  disabled={!hasNextSeason}
                  onClick={handleNextSeason}
                  className='self-center cursor-pointer disabled:cursor-default disabled:opacity-60'
                >
                  <CaretDoubleRight size={32} />
                </button>
              </div>
            </section>

            <h1 className='font-bold text-3xl my-3 leading-relaxed tracking-widest md:text-5xl md:leading-relaxed md:tracking-widest'>
              {selectedEpisode.title}
            </h1>

            <section className='flex align-middle justify-center flex-col'>
              <p className='mb-2'>Select the Episode</p>

              <ul className='flex flex-wrap align-middle justify-center self-center gap-5 w-3/4 lg:w-full'>
                {selectedSeason?.episodes?.map(episode => (
                  <li
                    key={episode.slug}
                    className='text-xl'
                  >
                    <button
                      onClick={() => setSelectedEpisode(episode)}
                      className={`hover:text-white ${selectedEpisode.slug === episode.slug ? 'text-white' : 'text-primary'}`}>
                      {romanize(episode.number)}
                    </button>
                  </li>
                ))}
              </ul>
            </section>

            <div className='pt-14'>
              <Link href={`/episodes/${selectedEpisode.slug}`}>
                <a className='py-3 px-2 text-sm border rounded-sm transition-colors ease-in border-primary self-center hover:grayscale'>
                  EXPLORE EPISODE
                </a>
              </Link>
            </div>

          </div>
        </div>
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query<GetSeasonsWithEpisodesResponse>({
    query: GET_SEASONS_WITH_EPISODES_QUERY,
  });

  if (!data || !data.seasons) {
    return {
      redirect: {
        permanent: false,
        destination: "/"
      }
    }
  }

  return {
    props: {
      seasons: data.seasons,
    },
    revalidate: 60 * 60 * 12, // 12 hours
  };
};
