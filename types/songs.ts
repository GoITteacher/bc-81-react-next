export interface Song {
  _id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
  releaseYear: number;
  durationSeconds: number;
  label: string;
  language: string;
}

export interface GetSongsResponse {
  page: number;
  perPage: number;
  totalPages: number;
  totalItems: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  items: Song[];
}
