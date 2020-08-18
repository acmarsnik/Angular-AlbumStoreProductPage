import { Track } from './track';

export interface SubAlbum {
  name: string;
  releaseDate: string;
  coverImage: string;
  tracks: Track[];
}