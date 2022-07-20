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
  comics: IResourceObject;
  stories: IResourceObject;
  events: IResourceObject;
  series: IResourceObject;
}

export { default } from './Characters';
