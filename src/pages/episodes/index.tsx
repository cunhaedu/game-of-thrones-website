import { CaretDoubleLeft, CaretDoubleRight } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { Menu } from '../../components/Menu';
import { romanize } from '../../helpers/romanize.helper';
import { Episode, Season, seasons } from '../../mocks/seasons.mock';

export default function Episodes() {
  const [selectedSeason, setSelectedSeason] = useState<Season>({} as Season);
  const [selectedEpisode, setSelectedEpisode] = useState<Episode>({} as Episode);
  const [hasPreviousSeason, setHasPreviousSeason] = useState(false);
  const [hasNextSeason, setHasNextSeason] = useState(true);

  useEffect(() => {
    setSelectedSeason(seasons[0]);
    setSelectedEpisode(seasons[0].episodes[0]);

    changeNextAndPreviousSeasonInformation(0);
  }, []);

  function handlePreviousSeason(): void {
    const selectedSeasonIndex = seasons.indexOf(selectedSeason) - 1;
    setSelectedSeason(seasons[selectedSeasonIndex]);
    setSelectedEpisode(seasons[selectedSeasonIndex].episodes[0]);

    changeNextAndPreviousSeasonInformation(seasons.indexOf(seasons[selectedSeasonIndex]));
  }

  function handleNextSeason(): void  {
    const selectedSeasonIndex = seasons.indexOf(selectedSeason) + 1;
    setSelectedSeason(seasons[selectedSeasonIndex]);
    setSelectedEpisode(seasons[selectedSeasonIndex].episodes[0]);

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
          <section
            style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url('https://drive.google.com/uc?export=view&id=${selectedEpisode.cover}')`}}
            className="bg-center bg-cover bg-no-repeat">
            <div className='min-h-screen flex flex-col align-middle justify-center text-center text-white' >
              <section className='mb-5'>
                <span className='text-sm mb-2'>Select Season</span>
                <div className='flex align-middle justify-center gap-5'>
                  <button disabled={!hasPreviousSeason} onClick={handlePreviousSeason} className='self-center cursor-pointer disabled:cursor-default disabled:opacity-60'>
                    <CaretDoubleLeft size={32} />
                  </button>
                  <div>
                    <p className='font-bold text-4xl'>{romanize(selectedSeason.seasonNumber)}</p>
                  </div>
                  <button disabled={!hasNextSeason} onClick={handleNextSeason} className='self-center cursor-pointer disabled:cursor-default disabled:opacity-60'>
                    <CaretDoubleRight size={32} />
                  </button>
                </div>
              </section>

              <h1 className='font-bold text-5xl p-5 tracking-widest'>
                {selectedEpisode.title}
              </h1>

              <section>
                <span>Select the Episode</span>

              </section>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
