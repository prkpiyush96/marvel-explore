import { IUrl, IThumbnail, IResourceObject } from '../../types/common';

export interface IGetCharacterResponse {
  attributionHTML: string;
  attributionText: string;
  code: number;
  copyright: string;
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Array<ICharacter>;
  };
  etag: string;
  status: string;
}
export interface ICharacter {
  id: number;
  name: string;
  description: string;
  modified: Date;
  resourceURI: string;
  urls: Array<IUrl>;
  thumbnail: IThumbnail;
  comics: Array<IResourceObject>;
  stories: Array<IResourceObject>;
  events: Array<IResourceObject>;
  series: Array<IResourceObject>;
}

export { default } from './Characters';
