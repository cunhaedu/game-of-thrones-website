import { ParsedUrlQuery } from 'querystring';

export type Params = ParsedUrlQuery & {
  slug: string;
}
