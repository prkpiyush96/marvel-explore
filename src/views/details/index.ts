import { IUrl, IThumbnail } from '../../types/common';

export interface IGetCharacterComicsResponse {
  attributionHTML: string;
  attributionText: string;
  code: number;
  copyright: string;
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Array<ICharacterComics>;
  };
  etag: string;
  status: string;
}

export interface ICharacterComics {
  id: number;
  title: string;
  description: string;
  modified: string;
  thumbnail: IThumbnail;
  urls: Array<IUrl>;
}

export { default } from './Details';
