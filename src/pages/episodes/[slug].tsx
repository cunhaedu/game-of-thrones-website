import { gql } from '@apollo/client';
import { GetStaticPaths, GetStaticProps } from 'next';
import { client } from '../../lib/apollo';
import { ParsedUrlQuery } from 'querystring';

type Params = ParsedUrlQuery & {
  slug: string;
}

type EpisodeProps = {
  title: string;
  slug: string;
  number: number;
  cover: string;
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
    }
  }
`

export default function Episode({ episode }: GetEpisodeResponse) {
  return (
    <h1 className='text-white'>{episode.title}</h1>
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
