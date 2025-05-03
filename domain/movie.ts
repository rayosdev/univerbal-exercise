import { Opaque } from './utils';

export type Movie = {
  id: Opaque<'movie-id'>;
  title: string;
  director: string;
  releaseYear: number;
  genres: string[];
  runtimeMinutes: number;
  src: string;
  rating: number;
};
