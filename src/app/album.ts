import { SubAlbum } from './sub-album';
import { Track } from './track';

export interface Album {
  id: number;
  artist: string;
  album: SubAlbum;
  name: string;
  releaseDate: string;
  coverImage: string;
  tracks: Track[];
}
